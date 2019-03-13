import axios from 'axios';
import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';

const startLoadItem = createAction(types.START_LOAD_ITEM);
const addItem = createAction(types.ADD_ITEM);
const loadItemError = createAction(types.LOAD_ITEM_ERROR);

const startPushItem = createAction(types.START_PUSH_ITEM);
const pushItemError = createAction(types.PUSH_ITEM_ERROR);

const authenticate = createAction(types.AUTHENTICATE);
const unauthenticate = createAction(types.UNAUTHENTICATE);

export const loadItem = () => async (dispatch:Dispatch) => {
  try {
    dispatch(startLoadItem());

    const { data } = await axios.get('/api/users');

    dispatch(addItem(data));
    dispatch(authenticate());
  } catch (e) {
    alert(e);

    dispatch(loadItemError());
  }
};

export const login = ({ email, password }: { email: string, password: string }) => async (dispatch:Dispatch) => {
    try {
        dispatch(startPushItem());

        const { data } = await axios.post('/api/users/login', { email, password });

        dispatch(addItem(data));
        dispatch(authenticate());
    } catch (e) {
        alert(e);

        dispatch(pushItemError());
    }
};

export const logout = () => async(dispatch:Dispatch) => {
    try {
        dispatch(startPushItem());

        await axios.get('/api/users/logout');

        dispatch(unauthenticate());
    } catch (e) {
        alert(e);

        dispatch(pushItemError());
    }
};