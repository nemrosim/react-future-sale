import { all, takeLatest } from 'redux-saga/effects';
import { signOutAction, signOutWorker } from './signOut';
import { signInAction, signInWorker } from './signIn';
import { signUpAction, signUpWorker } from './signUp/viaPhoneNumber';
import { signUpVerificationAction } from './signUp/viaPhoneNumber/signUp.actions';
import { signUpSMSVerificationWorker } from './signUp/viaPhoneNumber/signUp.sagas';

export function* auth(): IterableIterator<any> {
    yield all([
        takeLatest(signInAction, signInWorker),
        takeLatest(signOutAction, signOutWorker),
        takeLatest(signUpAction, signUpWorker),
        takeLatest(signUpAction, signUpWorker),
        takeLatest(signUpVerificationAction, signUpSMSVerificationWorker),
    ]);
}
