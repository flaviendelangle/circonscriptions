export type Point = [number, number];

export type Polygon = Point[];

export type PolygonWithHoles = Polygon[];

export interface AdministrativeArea {
  coordinates: PolygonWithHoles[];
}

export interface County extends AdministrativeArea {
  code: string;
}

export interface District extends AdministrativeArea {
  ref: string;
  countyCode: string;
  districtNumber: number;
}
