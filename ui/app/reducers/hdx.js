import types from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  exportRegions: {},
  items: []
};

export default function hdx(
  state = initialState,
  {
    error,
    exportRegion,
    exportRegions,
    id,
    statusCode,
    total,
    type,
    locationOptions,
    activePage,
    itemsPerPage,
    response
  }
) {
  switch (type) {
    case types.FETCHING_EXPORT_REGION:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
        status: null
      };

    case types.FETCHING_EXPORT_REGIONS:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null,
        status: null
      };

    case types.RECEIVED_EXPORT_REGION:
      return {
        ...state,
        fetching: false,
        fetched: true,
        exportRegions: {
          ...state.exportRegions,
          [id]: exportRegion
        },
        error: null,
        status: null
      };

    case types.RECEIVED_EXPORT_REGIONS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: response.results,
        error: null,
        status: null,
        total: response.count,
        activePage,
        pages: Math.ceil(response.count / itemsPerPage)
      };

    case types.FETCH_EXPORT_REGIONS_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        exportRegions: {},
        status: null,
        id,
        error,
        statusCode
      };

    case types.STARTING_EXPORT_REGION_RUN:
      return {
        ...state,
        status: "Starting export region run...",
        id
      };

    case types.EXPORT_REGION_RUN_STARTED:
      return {
        ...state,
        status: "Export region run started.",
        id
      };

    case types.EXPORT_REGION_RUN_ERROR:
      return {
        ...state,
        status: `Export region run failed: ${error.message}`,
        id,
        error,
        statusCode
      };

    case types.STARTING_EXPORT_REGION_DELETE:
      return {
        ...state,
        status: null,
        id
      };

    case types.EXPORT_REGION_DELETED:
      exportRegions = {
        ...state.exportRegions
      };
      delete exportRegions[id];

      return {
        ...state,
        status: "Export region deleted.",
        exportRegions,
        id
      };

    case types.DELETE_EXPORT_REGION_ERROR:
      return {
        ...state,
        status: `Export region deletion failed: ${error.message}`,
        id,
        error,
        statusCode
      };

    case types.ZOOM_TO_EXPORT_REGION:
      return {
        ...state,
        selectedExportRegion: id
      };

    case types.EXPORT_REGION_CREATED:
    case types.EXPORT_REGION_UPDATED:
      return {
        ...state,
        exportRegions: {
          ...state.exportRegions,
          [id]: exportRegion
        },
        status: "Export region saved."
      };

    case types.RECEIVED_LOCATION_OPTIONS:
      return {
        ...state,
        locationOptions
      };

    default:
      return state;
  }
}
