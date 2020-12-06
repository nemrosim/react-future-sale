import { combineReducers } from 'redux';

import { signInReducer } from './signIn';
import { signOutReducer } from './signOut';
import { signUpViaPhoneNumberReducer } from './signUp/viaPhoneNumber';
import { signUpSMSVerificationReducer } from './signUp/viaPhoneNumber/signUp.reducer';

export enum ReducerNames {
    signIn = 'signIn',
    signOut = 'signOut',
    signUp = 'signUp',
    signUpVerification = 'signUpVerification',
}

export const auth = combineReducers({
    [ReducerNames.signIn]: signInReducer,
    [ReducerNames.signOut]: signOutReducer,
    [ReducerNames.signUp]: signUpViaPhoneNumberReducer,
    [ReducerNames.signUpVerification]: signUpSMSVerificationReducer,
});
