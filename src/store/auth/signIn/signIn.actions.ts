import { createAction } from 'redux-actions';

export const SIGN_IN = '[AUTH] SIGN_IN';
export const SIGN_IN_SUCCESS = '[AUTH] SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = '[AUTH] SIGN_IN_ERROR';
export const SIGN_IN_RESET_STATE = '[AUTH] SIGN_IN_RESET_STATE';

export interface SignInActionProps {
    email: string;
    password: string;
}

export interface SignInSuccessActionProps {
    user?: string;
}

export const signInAction = createAction<SignInActionProps>(SIGN_IN);
export const signInSuccessAction = createAction<SignInSuccessActionProps>(SIGN_IN_SUCCESS);
export const signInErrorAction = createAction(SIGN_IN_ERROR);
export const signInResetStateAction = createAction(SIGN_IN_RESET_STATE);
