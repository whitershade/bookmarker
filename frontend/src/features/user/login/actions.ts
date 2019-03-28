import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { startPush, authenticate, pushError } from '../actions';
import api from '../../../utils/api';

export const login = (
  { email, password }: { email: string; password: string },
) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());

    const { data } = await api.post('users/login', { email, password });

    dispatch(authenticate(data));
    dispatch(push('/'));
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};
