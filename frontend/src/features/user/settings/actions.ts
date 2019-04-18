import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import { unauthenticate, pushError, startPush } from '../actions';
import { UPDATE } from '../constants';
import api from '../../../utils/api';
import setGlobalVarialbes from '../utils/setGlobalVariables';

const updateItem = createAction(UPDATE);

export const deleteItem = (): Function => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());
    await api.delete('users');
    dispatch(unauthenticate());
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};

export const patchItem = (formValues: any): Function => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());
    const { data: newUser } = await api.patch('users', formValues);
    dispatch(updateItem(newUser));
    setGlobalVarialbes(formValues.settings);
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};