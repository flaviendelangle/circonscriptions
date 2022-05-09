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
  counties: County[] | null;
  selectedCounty: County | null;
  districts: {
    [countyCode: string]: {
      status: "loading" | "loaded";
      data: District[] | null;
    };
  };
}

type MapActions =
  | {
      type: "setCounties";
      value: County[];
    }
  | {
      type: "setSelectedCounty";
      value: County | null;
    }
  | { type: "setDistrictsLoading"; value: string }
  | {
      type: "setDistricts";
      value: { countyCode: string; districts: District[] };
    };

const INITIAL_MAP_STATE: MapState = {
  counties: null,
  selectedCounty: null,
  districts: {},
};

const mapReducer: React.Reducer<MapState, MapActions> = (state, action) => {
  switch (action.type) {
    case "setCounties": {
      return { ...state, counties: action.value };
    }

    case "setSelectedCounty": {
      return { ...state, selectedCounty: action.value };
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

const MapContent = () => {
  const map = useMap();
  const [state, dispatch] = React.useReducer(mapReducer, INITIAL_MAP_STATE);

  React.useEffect(() => {
    const fetchCounties = async () => {
      const response = await window.fetch("/departements.json");
      const counties: County[] = await response.json();
      dispatch({ type: "setCounties", value: counties });
    };

    fetchCounties();
  }, []);

  React.useEffect(() => {
    const fetchDistricts = async () => {
      if (
        state.selectedCounty == null ||
        state.districts[state.selectedCounty.code]
      ) {
        return;
      }

      dispatch({
        type: "setDistrictsLoading",
        value: state.selectedCounty.code,
      });

      const response = await window.fetch(
        `/circonscriptions-${state.selectedCounty.code}.json`
      );
      const districts = await response.json();

      dispatch({
        type: "setDistricts",
        value: { countyCode: state.selectedCounty.code, districts },
      });
    };

    fetchDistricts();
  }, [state.selectedCounty]); // eslint-disable-line react-hooks/exhaustive-deps

  const districtsToShow = React.useMemo(() => {
    if (state.selectedCounty == null) {
      return null;
    }

    return state.districts[state.selectedCounty.code]?.data ?? null;
  }, [state.selectedCounty, state.districts]);

  React.useEffect(() => {
    if (!state.selectedCounty) {
      return;
    }

    map.fitBounds(state.selectedCounty.bounds);
  }, [state.selectedCounty]);

  const handleClickAdministrativeAreaShape = React.useCallback(
    <K extends "county" | "district">(
      type: K,
      value: K extends "county" ? County : District
    ) => {
      if (type === "county") {
        return dispatch({ type: "setSelectedCounty", value: value as County });
      }
    },
    []
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: "setSelectedCounty", value: null });
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
      {state.selectedCounty == null &&
        state.counties?.map((county) => (
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

const Map = () => {
  return (
    <MapContainer center={{ lat: 46.887455, lng: 2.425491 }} zoom={7}>
      <TileLayer
        url={osm.maptiler.url}
        attribution={osm.maptiler.attribution}
      />
      <MapContent />
    </MapContainer>
  );
};

export default Map;
