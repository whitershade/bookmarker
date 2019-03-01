import axios from 'axios';
import { createAction } from 'redux-actions';
import { push } from 'connected-react-router';
import { Dispatch } from 'redux';
import * as types from './constants';

const startPushItem = createAction(types.START_PUSH_ITEM);
const pushItemError = createAction(types.PUSH_ITEM_ERROR);

export const onSubmit = ({ url }: { url: string }) => async (dispatch:Dispatch) => {
  try {
    dispatch(startPushItem());

    const { data: { _id } } = await axios.post('/api/articles', { url });

    dispatch(push(`/articles/${_id}`));
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
