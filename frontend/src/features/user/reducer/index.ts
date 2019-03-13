import * as types from '../constants';
import { handleActions } from 'redux-actions';
import { startLoad, addToState, loadError } from '../../../reducers/common';

export const initialState = {
    data: {},
    isLoading: false,
    isAuthenticated: false
};

export default handleActions({
        [types.START_LOAD_ITEM]: startLoad,
        [types.ADD_ITEM]: addToState,
        [types.LOAD_ITEM_ERROR]: loadError,
        [types.AUTHENTICATE]: (state: any) => ({ ...state, isAuthenticated: true }),
        [types.UNAUTHENTICATE]: (state: any) => ({ ...state, data: {}, isAuthenticated: false})
    },
    initialState
);
