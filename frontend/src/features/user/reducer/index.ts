import * as types from '../constants';
import { handleActions } from 'redux-actions';
import { startLoad, loadError } from '../../../reducers/common';

export const initialState = {
    data: {},
    isLoading: false,
    isAuthenticated: false
};

export default handleActions({
        [types.START_LOAD_ITEM]: startLoad,
        [types.LOAD_ITEM_ERROR]: loadError,
        [types.AUTHENTICATE]: (state: any, payload) => ({
            ...state,
            data: payload,
            isLoading: false,
            isAuthenticated: true
        }),
        [types.UNAUTHENTICATE]: (state: any) => ({
            ...state,
            data: {},
            isAuthenticated: false
        })
    },
    initialState
);
