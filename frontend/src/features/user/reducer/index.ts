import { handleActions } from 'redux-actions';
import * as types from '../constants';
import { startLoad, loadError, updateItem } from '../../../reducers/common';

export const initialState = {
  data: {},
  isLoading: false,
  isAuthenticated: false,
};

export default handleActions({
  [types.START_LOAD_ITEM]: startLoad,
  [types.LOAD_ITEM_ERROR]: loadError,
  [types.UPDATE]: updateItem,
  [types.AUTHENTICATE]: (state: any, action) => ({
    ...state,
    data: action.payload,
    isLoading: false,
    isAuthenticated: true,
  }),
  [types.UNAUTHENTICATE]: (state: any) => ({
    ...state,
    data: {},
    isAuthenticated: false,
  }),
},
initialState);
