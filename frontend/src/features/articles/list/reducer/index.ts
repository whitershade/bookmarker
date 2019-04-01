import { handleActions } from 'redux-actions';
import * as types from '../constants';
import {
  startLoad,
  addToState,
  loadError,
  removeItem,
} from '../../../../reducers/common';

export const initialState = {
  isLoading: false,
  data: {},
};

export default handleActions(
  {
    [types.START_LOAD_ITEMS]: startLoad,
    [types.ADD_ITEMS]: addToState,
    [types.LOAD_ITEMS_ERROR]: loadError,
    [types.REMOVE_ITEM]: removeItem,
  },
  initialState,
);
