import { Dispatch } from 'redux';
import axios from 'axios';
import { push } from 'connected-react-router';
import { startPushItem, authenticate, pushItemError } from '../actions';

export const login = ({ email, password }: { email: string; password: string }) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPushItem());

    const { data } = await axios.post('/api/users/login', { email, password });

    dispatch(authenticate(data));
    dispatch(push('/'));
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
