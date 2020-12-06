import produce from 'immer';
import * as ACTIONS from './add_product.actions';
import { allInOneWithReset, getInitialState } from '../../../utils/HelperFunctions';

export const addProductReducer = produce((draft, action) => {
    allInOneWithReset({
        defaultDataState: null,
        request: ACTIONS.ADD_PRODUCT,
        success: ACTIONS.ADD_PRODUCT_SUCCESS,
        error: ACTIONS.ADD_PRODUCT_ERROR,
        reset: ACTIONS.ADD_PRODUCT_RESET_STATE,
        action,
        draft,
    });
}, getInitialState(undefined));
