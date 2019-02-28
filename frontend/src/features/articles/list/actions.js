import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from './constants';

const startLoadItems = createAction(types.START_LOAD_ITEMS);
const addItems = createAction(types.ADD_ITEMS);
const loadItemsError = createAction(types.LOAD_ITEMS_ERROR);

export const loadItems = () => dispatch => {
  dispatch(startLoadItems());

  return axios.get('/api/articles')
    .then(({ data }) => {
      dispatch(addItems(data));
    })
    .catch(e => {
      alert(e);

      dispatch(loadItemsError());
    });
};
