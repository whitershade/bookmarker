import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import api from '../../../utils/api';


import { startPush, pushError } from '../actions';

export const register = ({ email, password }: { email: string; password: string }) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());

    await api.post('users', { email, password });
    dispatch(push('/login'));
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};
