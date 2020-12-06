import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { auth } from './auth/sagas';
import { product } from './product/sagas';

export function* sagas(): SagaIterator {
    yield all([fork(auth), fork(product)]);
}
