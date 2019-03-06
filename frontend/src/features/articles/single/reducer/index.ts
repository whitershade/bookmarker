import * as types from '../constants';
import { AnyAction } from 'redux';
import {handleActions} from "redux-actions";

export const initialState = {
  isLoading: false,
  data: {}
};

export default handleActions(
    {
        [types.START_LOAD_ITEM]: (state:any) => ({
            ...state,
            isLoading: true
        }),
        [types.ADD_ITEM]: (state:any, action:AnyAction) => ({
            ...state,
            isLoading: false,
            data: action.payload
        }),
        [types.LOAD_ITEM_ERROR]: (state:any) => ({
            ...state,
            isLoading: false
        })
    },
    initialState
);