import { Dispatch } from 'redux';
import { unauthenticate, pushError, startPush } from '../actions';
import api from '../../../utils/api';

export const deleteItem = (): Function => async (dispatch: Dispatch, getState: Function) => {
  try {
    dispatch(startPush());

    const id = getState().user.data._id;

    await api.delete(`users/${id}`);

    dispatch(unauthenticate());
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};