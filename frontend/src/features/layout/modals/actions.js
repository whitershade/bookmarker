import { createAction } from 'redux-actions';
import * as types from './constants';

export const openModal = createAction(types.OPEN_MODAL);
export const closeModal = createAction(types.CLOSE_MODAL);
