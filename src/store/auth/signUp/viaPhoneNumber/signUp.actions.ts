import { createAction } from 'redux-actions';
import firebase from 'firebase';

export const SIGN_UP = '[AUTH] SIGN_UP';
export const SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = '[AUTH] SIGN_UP_ERROR';
export const SIGN_UP_RESET_STATE = '[AUTH] SIGN_UP_RESET_STATE';

export const SIGN_UP_VERIFICATION_CODE = '[AUTH] SIGN_UP_VERIFICATION_CODE';
export const SIGN_UP_VERIFICATION_CODE_SUCCESS = '[AUTH] SIGN_UP_VERIFICATION_CODE_SUCCESS';
export const SIGN_UP_VERIFICATION_CODE_ERROR = '[AUTH] SIGN_UP_VERIFICATION_CODE_ERROR';
export const SIGN_UP_VERIFICATION_CODE_RESET_STATE = '[AUTH] SIGN_UP_VERIFICATION_CODE_RESET_STATE';

export interface SignUpActionProps {
    phoneNumber: string;
    recaptcha: firebase.auth.ApplicationVerifier;
}

export interface SignUpSuccessActionProps {
    confirmation?: firebase.auth.ConfirmationResult;
}

export interface SignUpViaPhoneNumberSMSCode {
    smsCode?: string;
}

export const signUpAction = createAction<SignUpActionProps>(SIGN_UP);
export const signUpSuccessAction = createAction<SignUpSuccessActionProps>(SIGN_UP_SUCCESS);
export const signUpErrorAction = createAction(SIGN_UP_ERROR);
export const signUpResetStateAction = createAction(SIGN_UP_RESET_STATE);

export const signUpVerificationAction = createAction<SignUpViaPhoneNumberSMSCode>(
    SIGN_UP_VERIFICATION_CODE,
);
export const signUpVerificationSuccessAction = createAction<boolean>(
    SIGN_UP_VERIFICATION_CODE_SUCCESS,
);
export const signUpVerificationErrorAction = createAction(SIGN_UP_VERIFICATION_CODE_ERROR);
export const signUpVerificationResetStateAction = createAction(
    SIGN_UP_VERIFICATION_CODE_RESET_STATE,
);
