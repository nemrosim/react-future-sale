import { createAction } from 'redux-actions';

export const SIGN_OUT = '[AUTH] SIGN_OUT';
export const SIGN_OUT_SUCCESS = '[AUTH] SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = '[AUTH] SIGN_OUT_ERROR';

export const signOutAction = createAction(SIGN_OUT);
export const signOutSuccessAction = createAction(SIGN_OUT_SUCCESS);
export const signOutErrorAction = createAction(SIGN_OUT_ERROR);
