import axios from 'axios';
import { createAction } from 'redux-actions';
import { Dispatch } from 'redux';
import * as types from './constants';

const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);

export const loadItems = () => async (dispatch:Dispatch) => {
  try {
    dispatch(startLoadItems());

    const { data } = await axios.get('/api/articles');

    dispatch(addItems(data));
  } catch (e) {
    alert(e);

    dispatch(loadItemsError());
  }
};
