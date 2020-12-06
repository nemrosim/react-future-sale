import produce from 'immer';
import * as ACTIONS from './signUp.actions';
import { allInOneWithReset, getInitialState } from '../../../../utils/HelperFunctions';

export const signUpViaPhoneNumberReducer = produce((draft, action) => {
    allInOneWithReset({
        defaultDataState: null,
        request: ACTIONS.SIGN_UP,
        success: ACTIONS.SIGN_UP_SUCCESS,
        error: ACTIONS.SIGN_UP_ERROR,
        reset: ACTIONS.SIGN_UP_RESET_STATE,
        action,
        draft,
    });
}, getInitialState(undefined));

export const signUpSMSVerificationReducer = produce((draft, action) => {
    allInOneWithReset({
        defaultDataState: null,
        request: ACTIONS.SIGN_UP_VERIFICATION_CODE,
        success: ACTIONS.SIGN_UP_VERIFICATION_CODE_SUCCESS,
        error: ACTIONS.SIGN_UP_VERIFICATION_CODE_ERROR,
        reset: ACTIONS.SIGN_UP_VERIFICATION_CODE_RESET_STATE,
        action,
        draft,
    });
}, getInitialState(undefined));
