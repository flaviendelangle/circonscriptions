import * as React from "react";
import type { NextPage } from "next";
import { Map } from "../src/components/Map";
import {
  District,
  County,
  PolygonWithHoles,
  Polygon,
} from "../src/models/AdministrativeArea";

const isListOfPolygons = (a: any): a is Polygon[] =>
  typeof a[0][0][0] === "number";

const unifyCoordinates = (
  coordinates: PolygonWithHoles[] | Polygon[]
): PolygonWithHoles[] => {
  if (isListOfPolygons(coordinates)) {
    return [coordinates];
  }

  return coordinates;
};

const Home: NextPage = () => {
  const [districts, setDistricts] = React.useState<District[]>([]);
  const [counties, setCounties] = React.useState<County[]>([]);

  React.useEffect(() => {
    const fetchDb = async () => {
      const response = await window.fetch("/departements.json");
      const db = await response.json();

      setCounties(
        db.features.map((feature) => {
          return {
            code: feature.properties.code,
            coordinates: unifyCoordinates(feature.geometry.coordinates),
          };
        })
      );
    };

    fetchDb();
  }, []);

  React.useEffect(() => {
    const fetchDb = async () => {
      const response = await window.fetch(
        "/circonscriptions-legislatives.json"
      );
      const db = await response.json();

      const lookup: { [ref: string]: District } = {};
      for (const feature of db.features) {
        const ref = feature.properties.REF;
        const [countyCode, districtNumber] = ref.split("-");
        if (!lookup[ref]) {
          lookup[ref] = {
            ref,
            countyCode,
            districtNumber: Number(districtNumber),
            coordinates: [],
          };
        }

        lookup[ref].coordinates.push(
          ...unifyCoordinates(feature.geometry.coordinates)
        );
      }

      setDistricts(Object.values(lookup));
    };

    fetchDb();
  }, []);

  return (
    <div style={{ width: 500, height: 500 }}>
      <Map districts={districts} counties={counties} />
    </div>
  );
};

export default Home;
