import { combineReducers } from 'redux';
import { auth } from './auth/reducer';
import { productReducer } from './product/reducer';

export enum Reducers {
    authorization = 'authorization',
    product = 'product',
}

export const reducers = combineReducers({
    [Reducers.authorization]: auth,
    [Reducers.product]: productReducer,
});
