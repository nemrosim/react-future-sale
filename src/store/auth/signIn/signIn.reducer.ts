import produce from 'immer';
import { allInOneWithReset, getInitialState } from '../../../utils/HelperFunctions';
import * as ACTIONS from './signIn.actions';

export const signInReducer = produce((draft, action) => {
    allInOneWithReset({
        defaultDataState: null,
        request: ACTIONS.SIGN_IN,
        success: ACTIONS.SIGN_IN_SUCCESS,
        error: ACTIONS.SIGN_IN_ERROR,
        reset: ACTIONS.SIGN_IN_RESET_STATE,
        action,
        draft,
    });
}, getInitialState({}));
