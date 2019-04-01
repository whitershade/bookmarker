import { handleActions } from 'redux-actions';
import { AnyAction } from 'redux';
import * as types from '../constants';

export const initialState = {
  data: [],
};

export default handleActions(
  {
    [types.OPEN_MODAL]: (state, action: AnyAction) => ({
      ...state,
      data: state.data.concat(action.payload),
    }),
    [types.CLOSE_MODAL]: (state, action: AnyAction) => ({
      ...state,
      data: state.data.filter(({ id }) => id !== action.payload),
    }),
  },
  initialState,
);
