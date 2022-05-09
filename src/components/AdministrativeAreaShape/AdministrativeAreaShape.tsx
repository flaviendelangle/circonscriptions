import * as React from "react";
import { Polygon } from "react-leaflet";
import { County, District } from "../../models/AdministrativeArea";

export const AdministrativeAreaShape = <K extends "county" | "district">(
  props: AdministrativeAreaShapeProps<K>
) => {
  const { data, type, onClick } = props;

  return (
    <React.Fragment>
      {data.coordinates.map((polygon, index) => {
        return (
          <Polygon
            key={index}
            interactive
            positions={polygon}
            eventHandlers={{ click: () => onClick(type, data) }}
          />
        );
      })}
    </React.Fragment>
  );
};

interface AdministrativeAreaShapeProps<K extends "county" | "district"> {
  type: K;
  data: K extends "county" ? County : District;
  onClick: (type: K, value: K extends "county" ? County : District) => void;
}
