import { all, takeLatest } from 'redux-saga/effects';
import { addProductAction } from './add';
import { addProductWorker } from './add';

export function* product(): IterableIterator<any> {
    yield all([takeLatest(addProductAction, addProductWorker)]);
}
