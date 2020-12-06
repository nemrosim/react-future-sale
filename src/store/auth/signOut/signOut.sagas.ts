import { put } from 'redux-saga/effects';

import { signOutErrorAction, signOutSuccessAction } from './signOut.actions';
import { signInResetStateAction } from '../signIn/signIn.actions';

export function* signOutWorker() {
    try {
        yield put(signOutSuccessAction());
        yield put(signInResetStateAction());
    } catch (error) {
        yield put(signOutErrorAction());
    }
}
