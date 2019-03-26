import { handleActions } from 'redux-actions';
import * as types from '../constants';
import { addToState, loadError, startLoad } from '../../../../reducers/common';

export const initialState = {
  isLoading: false,
  data: {},
};

export default handleActions(
  {
    [types.START_LOAD_ITEM]: startLoad,
    [types.ADD_ITEM]: addToState,
    [types.LOAD_ITEM_ERROR]: loadError,
  },
  initialState,
);
