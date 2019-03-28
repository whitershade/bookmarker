import { createAction } from 'redux-actions';
import * as types from './form/constants';

export const startPush = createAction(types.START_PUSH_ITEM);
export const pushError = createAction(types.PUSH_ITEM_ERROR);
