import { Dispatch } from 'redux';
import axios from 'axios';
import { push } from 'connected-react-router';

import { startPushItem, pushItemError } from '../actions';

export const register = ({ email, password }: { email: string; password: string }) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPushItem());

    await axios.post('/api/users', { email, password });
    dispatch(push('/login'));
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
