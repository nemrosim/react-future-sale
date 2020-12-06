import { put, call, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
    SignUpActionProps,
    signUpErrorAction,
    signUpSuccessAction,
    signUpVerificationErrorAction,
    signUpVerificationSuccessAction,
    SignUpViaPhoneNumberSMSCode,
} from './signUp.actions';
import { Action } from 'redux-actions';
import { errorHandler } from '../../../../utils/HelperFunctions';
import firebase from 'firebase';
import { firebase_initializedApp } from '../../../../api/firebase';
import { SignUpSelectors } from '../../selectors';

export function* signUpWorker(action: Action<SignUpActionProps>): SagaIterator {
    const { phoneNumber, recaptcha } = action.payload;

    try {
        firebase_initializedApp.auth().useDeviceLanguage();

        const context = firebase_initializedApp.auth();

        const data: firebase.auth.ConfirmationResult = yield call(
            [context, context.signInWithPhoneNumber],
            phoneNumber,
            recaptcha,
        );

        yield put(
            signUpSuccessAction({
                confirmation: data,
            }),
        );
    } catch (error) {
        const result = errorHandler({ error, message: 'Error during signIn' });
        yield put(signUpErrorAction(result));
    }
}

export function* signUpSMSVerificationWorker(
    action: Action<SignUpViaPhoneNumberSMSCode>,
): SagaIterator {
    const { smsCode } = action.payload;

    try {
        let confirmationResult;
        try {
            confirmationResult = yield select(SignUpSelectors.response);
        } catch (e) {
            console.error('No confirmation result');
        }

        yield confirmationResult.confirmation.confirm(smsCode);

        yield put(signUpVerificationSuccessAction(true));
    } catch (error) {
        const result = errorHandler({ error, message: 'Error during signIn' });
        yield put(signUpVerificationErrorAction(result));
    }
}
