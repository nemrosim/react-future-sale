import { createAction } from 'redux-actions';

export const ADD_PRODUCT = '[AUTH] ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = '[AUTH] ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = '[AUTH] ADD_PRODUCT_ERROR';
export const ADD_PRODUCT_RESET_STATE = '[AUTH] ADD_PRODUCT_RESET_STATE';

export interface AddProductActionProps {
    name: string;
    cost: number;
    images: any[];
}

export const addProductAction = createAction<AddProductActionProps>(ADD_PRODUCT);
export const addProductSuccessAction = createAction(ADD_PRODUCT_SUCCESS);
export const addProductErrorAction = createAction(ADD_PRODUCT_ERROR);
export const addProductResetStateAction = createAction(ADD_PRODUCT_RESET_STATE);
