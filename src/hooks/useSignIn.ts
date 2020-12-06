import { useMappedState, useDispatch } from 'redux-react-hook';
import {
    signInAction,
    SignInActionProps,
    SignInSuccessActionProps,
} from '../store/auth/signIn/signIn.actions';
import { SignInSelectors } from '../store/auth/selectors';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';

interface UseSignInReturnType {
    isLoading: boolean;
    signInHandler: (props: SignInActionProps) => void;
    error: any;
    response?: SignInSuccessActionProps | null;
}

export const useSignIn = (): UseSignInReturnType => {
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const isLoading = useMappedState(SignInSelectors.isLoading);
    const error = useMappedState(SignInSelectors.error);
    const response = useMappedState(SignInSelectors.response);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error.message || 'Error on sign-in', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                autoHideDuration: 2000,
            });
        }
    }, [error, enqueueSnackbar]);

    const signInHandler = (props: SignInActionProps) => {
        dispatch(signInAction(props));
    };

    return {
        isLoading,
        signInHandler,
        response,
        error,
    };
};
