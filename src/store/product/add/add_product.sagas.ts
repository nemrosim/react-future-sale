import { put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { addProductErrorAction, addProductSuccessAction } from './add_product.actions';
import { Action } from 'redux-actions';
import { AddProductActionProps } from './add_product.actions';
import { firebase_initializedApp } from '../../../api/firebase';
import { errorHandler } from '../../../utils/HelperFunctions';

export function* addProductWorker(action: Action<AddProductActionProps>): SagaIterator {
    const { cost, name, images } = action.payload;

    try {
        const storageRef = firebase_initializedApp.storage().ref();

        const imagesRef = storageRef.child(
            `images/${firebase_initializedApp.auth().currentUser.uid}/avatar.jpg`,
        );

        // const uploadedImage = yield imagesRef.put(imageBlob, { contentType: 'image/jpeg' });

        // imagesRef.

        // GET ALL
        // const context = firebase_initializedApp.firestore().collection('goods');
        //
        // const data: firebase.auth.ConfirmationResult = yield call([context, context.get]);
        //
        // console.log('data', data);
        //
        yield put(addProductSuccessAction());
    } catch (error) {
        const result = errorHandler({ error, message: 'Error during signIn' });
        yield put(addProductErrorAction(result));
    }
}
