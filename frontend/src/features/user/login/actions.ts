import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { startPushItem, authenticate, pushItemError } from '../actions';
import api from '../../../utils/api';

export const login = (
  { email, password }: { email: string; password: string },
) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPushItem());

    const { data } = await api.post('users/login', { email, password });

    dispatch(authenticate(data));
    dispatch(push('/'));
  } catch (e) {
    alert(e);

    dispatch(pushItemError());
  }
};
