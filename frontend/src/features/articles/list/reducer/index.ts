import * as types from '../constants';
import { handleActions } from 'redux-actions';
import { startLoad, addToState, loadError } from '../../../../reducers/common';

export const initialState = {
    isLoading: false,
    data: []
};

export default handleActions(
    {
        [types.START_LOAD_ITEMS]: startLoad,
        [types.ADD_ITEMS]: addToState,
        [types.LOAD_ITEMS_ERROR]: loadError
    },
    initialState
);