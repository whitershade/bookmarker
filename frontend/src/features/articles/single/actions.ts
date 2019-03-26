import axios from 'axios';
import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';

const startLoadItem = createAction(types.START_LOAD_ITEM);
const addItem = createAction(types.ADD_ITEM);
const loadItemError = createAction(types.LOAD_ITEM_ERROR);

export const loadItem = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoadItem());

    const { data } = await axios.get(`/api/articles/${id}`);

    dispatch(addItem(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemError());
  }
};
