import * as React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { AdministrativeAreaShape } from "../AdministrativeAreaShape";
import { District, County } from "../../models/AdministrativeArea";
import "leaflet/dist/leaflet.css";

const osm = {
  maptiler: {
    url: "https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1",
    attribution:
      '&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  },
};

interface MapState {
  county: County | null;
  districts: {
    [countyCode: string]: {
      status: "loading" | "loaded";
      data: District[] | null;
    };
  };
}

type MapActions =
  | {
      type: "setCounty";
      value: County | null;
    }
  | { type: "setDistrictsLoading"; value: string }
  | {
      type: "setDistricts";
      value: { countyCode: string; districts: District[] };
    };

const INITIAL_MAP_STATE: MapState = {
  county: null,
  districts: {},
};

const mapReducer: React.Reducer<MapState, MapActions> = (state, action) => {
  switch (action.type) {
    case "setCounty": {
      return { ...state, county: action.value };
    }

    case "setDistrictsLoading": {
      return {
        ...state,
        districts: {
          ...state.districts,
          [action.value]: { status: "loading", data: null },
        },
      };
    }

    case "setDistricts": {
      return {
        ...state,
        districts: {
          ...state.districts,
          [action.value.countyCode]: {
            status: "loaded",
            data: action.value.districts,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

const MapContent = (props: MapProps) => {
  const { counties, districts } = props;
  const map = useMap();
  const [state, dispatch] = React.useReducer(mapReducer, INITIAL_MAP_STATE);

  React.useEffect(() => {
    const fetchDistricts = async () => {
      if (state.county == null || state.districts[state.county.code]) {
        return;
      }

      dispatch({ type: "setDistrictsLoading", value: state.county.code });

      const response = await window.fetch(
        `/circonscriptions-${state.county.code}.json`
      );
      const districts = await response.json();

      dispatch({
        type: "setDistricts",
        value: { countyCode: state.county.code, districts },
      });
    };

    fetchDistricts();
  }, [state.county]); // eslint-disable-line react-hooks/exhaustive-deps

  const districtsToShow = React.useMemo(() => {
    if (state.county == null) {
      return null;
    }

    return state.districts[state.county.code]?.data ?? null;
  }, [state.county, state.districts]);

  React.useEffect(() => {
    if (!state.county) {
      return;
    }

    map.fitBounds(state.county.bounds);
  }, [state.county]);

  const handleClickAdministrativeAreaShape = React.useCallback(
    <K extends "county" | "district">(
      type: K,
      value: K extends "county" ? County : District
    ) => {
      if (type === "county") {
        return dispatch({ type: "setCounty", value: value as County });
      }
    },
    []
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "setCounty", value: null });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <React.Fragment>
      {districtsToShow?.map((district) => (
        <AdministrativeAreaShape
          type="district"
          data={district}
          onClick={handleClickAdministrativeAreaShape}
          key={district.ref}
        />
      ))}
      {state.county == null &&
        counties.map((county) => (
          <AdministrativeAreaShape
            type="county"
            onClick={handleClickAdministrativeAreaShape}
            data={county}
            key={county.code}
          />
        ))}
    </React.Fragment>
  );
};

const Map = (props: MapProps) => {
  return (
    <MapContainer center={{ lat: 46.887455, lng: 2.425491 }} zoom={7}>
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />
      <MapContent {...props} />
    </MapContainer>
  );
};

interface MapProps {
  counties: County[];
  districts: District[];
}

export default Map;
