import axios from 'axios';
import { createAction } from 'redux-actions';
import * as types from './constants';

const startLoadItem = createAction(types.START_LOAD_ITEM);
const addItem = createAction(types.ADD_ITEM);
const loadItemError = createAction(types.LOAD_ITEM_ERROR);

export const loadItem = (id) => dispatch => {
  dispatch(startLoadItem());

  return axios.get(`/api/articles/${id}`)
    .then(({ data }) => {
      dispatch(addItem(data));
    })
    .catch(e => {
      alert(e);

      dispatch(loadItemError());
    });
};
