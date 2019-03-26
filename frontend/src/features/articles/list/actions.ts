import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';
import api from '../../../utils/api';

const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);

export const loadItems = () => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoadItems());

    const { data } = await api.get('articles');

    dispatch(addItems(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemsError());
  }
};
