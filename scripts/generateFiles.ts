import { promises as fs } from 'fs'
import path from 'path'
import {County, Polygon, PolygonWithHoles, Point, District} from "../src/models/AdministrativeArea";

interface CountiesFile {
    type: 'FeatureCollection',
    features: {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: PolygonWithHoles[] | Polygon[]
        },
        properties: {
            code: string,
            nom: string
        }
    }[]
}

interface DistrictsFile {
    type: 'FeatureCollection',
    crs: {
        properties: {
            name: string
        },
        type: string
    },
    features: {
        type: 'Feature',
        properties: {
            REF: string,
        },
        geometry: {
            type: 'Polygon',
            coordinates: PolygonWithHoles[] | Polygon[]
        },
    }[]
}

const getDistrictCountyCodeFromRawCountyCode = (code: string) => `0${code}`;

const isListOfPolygons = (a: any): a is Polygon[] =>
    typeof a[0][0][0] === "number";

const unifyCoordinates = (
    inputCoordinates: PolygonWithHoles[] | Polygon[]
): PolygonWithHoles[] => {
    const rawCoordinates = isListOfPolygons(inputCoordinates) ? [inputCoordinates]: inputCoordinates

    return rawCoordinates.map(polygonWithHoles => polygonWithHoles.map(polygon => polygon.map(point => [point[1], point[0]])))
};

const getBounds = (coordinates: PolygonWithHoles[]): [Point, Point] => {
    let maxLng = -Infinity
    let minLng = Infinity
    let maxLat = -Infinity
    let minLat = Infinity

    for (const polygonWithHoles of coordinates) {
        for (const polygon of polygonWithHoles) {
            for (const point of polygon) {
                maxLng = Math.max(maxLng, point[1])
                minLng = Math.min(minLng, point[1])
                maxLat = Math.max(maxLat, point[0])
                minLat = Math.min(minLat, point[0])
            }
        }
    }

    return [[minLat, minLng], [maxLat, maxLng]]
}

const run = async () => {
    const countiesFile = await fs.readFile(path.join(__dirname, './departements.json'), 'utf-8')
    const rawCounties: CountiesFile = JSON.parse(countiesFile)

    const counties: County[] = rawCounties.features.map((feature) => {
        const coordinates = unifyCoordinates(feature.geometry.coordinates)

        return {
            code: getDistrictCountyCodeFromRawCountyCode(feature.properties.code),
            coordinates,
            bounds: getBounds(coordinates)
        };
    })

    await fs.writeFile(path.join(__dirname, '../public/departements.json'), JSON.stringify(counties))

    const districtsFile = await fs.readFile(path.join(__dirname, './circonscriptions.json'), 'utf-8')
    const rawDistricts: DistrictsFile = JSON.parse(districtsFile)

    const districtLookup: { [countyCode: string]: { [ref: string]: District } } = {};
    for (const feature of rawDistricts.features) {
        const ref = feature.properties.REF;
        const [countyCode, districtNumber] = ref.split("-");

        if (!districtLookup[countyCode]) {
            districtLookup[countyCode] = {}
        }

        if (!districtLookup[countyCode][ref]) {
            districtLookup[countyCode][ref] = {
                ref,
                countyCode,
                districtNumber: Number(districtNumber),
                coordinates: [],
            };
        }

        districtLookup[countyCode][ref].coordinates.push(
            ...unifyCoordinates(feature.geometry.coordinates)
        );
    }

    for await (const countyCode of Object.keys(districtLookup)) {
        await fs.writeFile(path.join(__dirname, `../public/circonscriptions-${countyCode}.json`), JSON.stringify(Object.values(districtLookup[countyCode])))
    }
}

run()