import { Reducers } from '../reducers';
import { ReducerPropNames } from '../../utils/HelperFunctions';
import { ReducerNames } from './reducer';

interface AuthReducerProps {
    [Reducers.product]: {
        [ReducerNames.add]: {
            [ReducerPropNames.loading]: boolean;
            [ReducerPropNames.data]: any;
            [ReducerPropNames.error]: any;
        };
    };
}

export const AddProductSelectors = {
    isLoading: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.add][ReducerPropNames.loading],
    error: (state: AuthReducerProps) =>
        state[Reducers.authorization][ReducerNames.add][ReducerPropNames.error],
    response: (state) => state[Reducers.authorization][ReducerNames.add][ReducerPropNames.data],
};
