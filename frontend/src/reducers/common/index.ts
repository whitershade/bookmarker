import { AnyAction } from 'redux';
import { omit } from 'lodash';

export const startLoad = (state: any) => ({
  ...state,
  isLoading: true,
});

export const addToState = (state: any, action: AnyAction) => ({
  ...state,
  isLoading: false,
  data: action.payload,
});

export const loadError = (state: any) => ({
  ...state,
  isLoading: false,
});

export const removeItem = (state: any, action: AnyAction) => ({
  ...state,
  data: omit(state.data, action.payload),
});
