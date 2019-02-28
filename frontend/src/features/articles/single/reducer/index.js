import * as types from '../constants';

export const initialState = {
  isLoading: false,
  data: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.START_LOAD_ITEM:
      return {
        ...state,
        isLoading: true
      };

    case types.ADD_ITEM:
      return {
        ...state,
        isLoading: false,
        data: payload
      };

    case types.LOAD_ITEM_ERROR:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}