import { AnyAction } from 'redux';

export const startLoad = (state:any) => ({
    ...state,
    isLoading: true
});

export const addToState = (state:any, action:AnyAction) => ({
    ...state,
    isLoading: false,
    data: action.payload
});

export const loadError = (state:any) => ({
    ...state,
    isLoading: false
});
