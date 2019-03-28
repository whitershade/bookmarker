import { push } from 'connected-react-router';
import { Dispatch } from 'redux';
import { startPush, pushError } from '../actions';
import api from '../../../utils/api';


export const onSubmit = ({ url }: { url: string }) => async (dispatch: Dispatch) => {
  try {
    dispatch(startPush());

    const { data: { _id } } = await api.post('articles', { url });

    dispatch(push(`/articles/${_id}`));
  } catch (e) {
    alert(e);

    dispatch(pushError());
  }
};
