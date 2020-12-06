import { Reducers } from '../reducers';
import { ReducerPropNames } from '../../utils/HelperFunctions';
import { ReducerNames } from './reducer';
import { SignInSuccessActionProps } from './signIn/signIn.actions';
import firebase from 'firebase';

interface AuthReducerProps {
    [Reducers.authorization]: {
        [ReducerNames.signIn]: {
            [ReducerPropNames.loading]: boolean;
            [ReducerPropNames.data]: any;
            [ReducerPropNames.error]: any;
        };
        [ReducerNames.signUp]: {
            [ReducerPropNames.loading]: boolean;
            [ReducerPropNames.data]: any;
            [ReducerPropNames.error]: any;
        };
    };
}

export const SignInSelectors = {
    isLoading: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signIn][ReducerPropNames.loading],
    error: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signIn][ReducerPropNames.error],
    response: (state): SignInSuccessActionProps =>
        state[Reducers.authorization][ReducerNames.signIn][ReducerPropNames.data],
};

export const SignUpSelectors = {
    isLoading: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signUp][ReducerPropNames.loading],
    error: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signUp][ReducerPropNames.error],
    response: (state) => state[Reducers.authorization][ReducerNames.signUp][ReducerPropNames.data],
};

export const SignUpSMSVerificationSelectors = {
    isLoading: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signUpVerification][ReducerPropNames.loading],
    error: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.signUpVerification][ReducerPropNames.error],
    response: (state): SignInSuccessActionProps =>
        state[Reducers.authorization][ReducerNames.signUpVerification][ReducerPropNames.data],
};
