import * as types from '../constants';

export const initialState = {
  isLoading: false,
  data: {}
};

type Action = {
  type?: string,
  payload?: any
}

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case types.START_LOAD_ITEM:
      return {
        ...state,
        isLoading: true
      };

    case types.ADD_ITEM:
      return {
        ...state,
        isLoading: false,
        data: action.payload
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