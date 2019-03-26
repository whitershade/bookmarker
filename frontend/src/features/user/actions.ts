import axios from 'axios';
import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';

const startLoadItem = createAction(types.START_LOAD_ITEM);
const loadItemError = createAction(types.LOAD_ITEM_ERROR);

export const startPushItem = createAction(types.START_PUSH_ITEM);
export const pushItemError = createAction(types.PUSH_ITEM_ERROR);

export const authenticate = createAction(types.AUTHENTICATE);
export const unauthenticate = createAction(types.UNAUTHENTICATE);

export const loadItem = () => async (dispatch: Dispatch) => {
  console.log('load user');

  try {
    dispatch(startLoadItem());

    const { data } = await axios.get('/api/users');

    dispatch(authenticate(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemError());
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch(startPushItem());

    await axios.get('/api/users/logout');

    dispatch(unauthenticate());
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
