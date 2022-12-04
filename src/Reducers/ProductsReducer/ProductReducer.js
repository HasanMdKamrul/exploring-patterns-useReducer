import { DATA_FETCHING, ERROR, LOADING_START } from "../Actions/actions";

export const initialState = {
  loading: false,
  fetchingData: [],
  error: false,
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case DATA_FETCHING:
      return {
        ...state,
        loading: false,
        fetchingData: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
