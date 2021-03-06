import expect from 'expect';
import reducer, { initialState } from './index';
import * as types from '../constants';

describe('articles reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`should handle ${types.START_LOAD_ITEMS}`, () => {
    const action = {
      type: types.START_LOAD_ITEMS,
    };

    const expectedState = {
      ...initialState,
      isLoading: true,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${types.ADD_ITEMS}`, () => {
    const payload = [{ id: 1 }, { id: 2 }, { id: 3 }];

    const state = {
      ...initialState,
      data: [],
      isLoading: true,
    };

    const action = {
      type: types.ADD_ITEMS,
      payload,
    };

    const expectedState = {
      ...state,
      data: payload,
      isLoading: false,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it(`should handle ${types.LOAD_ITEMS_ERROR}`, () => {
    const state = {
      isLoading: true,
    };

    const action = {
      type: types.LOAD_ITEMS_ERROR,
    };

    const expectedState = {
      ...state,
      isLoading: false,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
