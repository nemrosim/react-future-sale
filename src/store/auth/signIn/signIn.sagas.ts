import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { signInErrorAction, SignInActionProps, signInSuccessAction } from './signIn.actions';
import { errorHandler } from '../../../utils/HelperFunctions';
import { axiosInstance } from '../../../api';
import { Action } from 'redux-actions';
import { AxiosResponse } from 'axios';
import { SignInPostResponse } from '../../../api/mocks/auth/signIn';
import { ApiRoutes, LocalStorageKeys } from '../../../constants';
import { firebase_initializedApp } from '../../../api/firebase';

const saveToLocalStorage = (value) => {
    localStorage.setItem(LocalStorageKeys.TOKEN, value);
};

export function* signInWorker(action: Action<SignInActionProps>): SagaIterator {
    const { email, password } = action.payload;

    try {
        // const requestData: SignInActionProps = { email, password };

        const context = firebase_initializedApp.auth();
        const { user } = yield call([context, context.signInWithEmailAndPassword], email, password);

        /* const { token } = responseData.data;
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;*/

        // saveToLocalStorage(token);

        console.log('User', user);

        yield put(
            signInSuccessAction({
                user,
            }),
        );
    } catch (error) {
        const result = errorHandler({ error, message: 'Error during signIn' });
        yield put(signInErrorAction(result));
    }
}
