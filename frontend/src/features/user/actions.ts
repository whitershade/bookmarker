import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';
import api from '../../utils/api';

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

    const { data } = await api.get('users');

    dispatch(authenticate(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemError());
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch(startPushItem());

    await api.get('users/logout');

    dispatch(unauthenticate());
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
