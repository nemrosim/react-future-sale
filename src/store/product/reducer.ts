import { combineReducers } from 'redux';
import { addProductReducer } from './add';

export enum ReducerNames {
    add = 'add',
}

export const productReducer = combineReducers({
    [ReducerNames.add]: addProductReducer,
});
