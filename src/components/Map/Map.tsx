import * as React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import {Map as LeafletMap, polygon} from 'leaflet'
import "leaflet/dist/leaflet.css";
import {District, County, AdministrativeArea } from "../../models/AdministrativeArea";

const osm = {
    maptiler: {
        url:
            "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1",
        attribution:
            '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    },
};

const getDistrictCountyCodeFromRawCountyCode = (code: string) => `0${code}`

const AdministrativeAreaShape = <K extends 'country'  | 'district'>(props: AdministrativeAreaShapeProps<K>) => {
    const { data, type, onClick } = props

    const polygons = React.useMemo(() => data.coordinates.map(polygonWithHoles => polygonWithHoles.map(polygon => polygon.map(el => [el[1], el[0]]))), [])

    return (
        <React.Fragment>
            {polygons.map((polygon, index) => {
                return (
                    <Polygon key={index} interactive positions={polygon} eventHandlers={{ click: () => onClick(type, data) }} />
                );
            })}
        </React.Fragment>
    );
}

interface AdministrativeAreaShapeProps<K extends 'country' | 'district'> {
    type: K,
    data: K extends 'county' ? County : District,
    onClick: (type: K, value: K extends 'county' ? County : District) => void
}

const Map = (props: MapProps) => {
    const [selectedCountyCode, setSelectedCountyCode] = React.useState<string | null>(null)
    const { counties, districts } = props

    const mapRef = React.useRef<LeafletMap | null>(null);

    console.log(counties.map(el => el.code))
    console.log([...new Set(districts.map(el => el.countyCode))])

    const districtsInSelectedCounty = React.useMemo(() => {
        if (selectedCountyCode == null) {
            return []
        }

        const cleanSelectedCountyCode = getDistrictCountyCodeFromRawCountyCode(selectedCountyCode)
        console.log(cleanSelectedCountyCode)

        // return districts
        return districts.filter(district => district.countyCode === cleanSelectedCountyCode)
    }, [selectedCountyCode, districts])

    const handleClickAdministrativeAreaShape = React.useCallback(<K extends 'county' | 'district'>(type: K, value: K extends 'county' ? County : District) => {
        if (type === 'county') {
            return setSelectedCountyCode((value as County).code)
        }

        console.log(value)
    }, [])

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedCountyCode != null && e.key === 'Escape') {
                setSelectedCountyCode(null)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [selectedCountyCode])

    return (
        <MapContainer center={{ lat: 46.887455, lng: 2.425491 }} zoom={7} ref={mapRef} >
            <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
            />
            {districtsInSelectedCounty.map(district => <AdministrativeAreaShape<'district'> type='district' data={district} onClick={handleClickAdministrativeAreaShape} key={district.ref} />)}
            {selectedCountyCode == null && counties.map(county => <AdministrativeAreaShape<'county'> type='county' onClick={handleClickAdministrativeAreaShape} data={county} key={county.code} />)}
        </MapContainer>
    );
};

interface MapProps {
    counties: County[]
    districts: District[]
}

export default Map