import axios from 'axios';
import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';
import * as types from './constants';

const startPushItem = createAction(types.START_PUSH_ITEM);
const pushItemError = createAction(types.PUSH_ITEM_ERROR);

export const onSubmit = ({ url }) => dispatch => {
  dispatch(startPushItem());

  return axios.post('/api/articles', { url })
    .then(({ data: { _id } }) => {
      dispatch(push(`/articles/${_id}`));
    })
    .catch(e => {
      alert(e);

      dispatch(pushItemError());
    });
};
