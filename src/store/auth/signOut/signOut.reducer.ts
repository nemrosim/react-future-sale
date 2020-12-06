import produce from 'immer';
import { getInitialState, allInOne } from '../../../utils/HelperFunctions';
import * as ACTIONS from './signOut.actions';

export const signOutReducer = produce((draft, action) => {
    allInOne({
        defaultDataState: [],
        request: ACTIONS.SIGN_OUT,
        success: ACTIONS.SIGN_OUT_SUCCESS,
        error: ACTIONS.SIGN_OUT_ERROR,
        action,
        draft,
    });
}, getInitialState([]));
