import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';
import { startPush, pushError } from '../actions';
import api from '../../../utils/api';

const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);

const removeItem = createAction(types.REMOVE_ITEM);

export const loadItems = (): Function => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoadItems());

    const { data } = await api.get('articles');

    dispatch(addItems(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemsError());
  }
};

export const deleteItem = (id: string): Function => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());

    const { data: articleId } = await api.delete(`articles/${id}`);

    dispatch(removeItem(articleId));
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};
