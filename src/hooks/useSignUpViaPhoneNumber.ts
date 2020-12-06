import { useMappedState, useDispatch } from 'redux-react-hook';
import { SignUpSelectors, SignUpSMSVerificationSelectors } from '../store/auth/selectors';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import {
    signUpAction,
    SignUpActionProps,
    signUpVerificationAction,
    SignUpViaPhoneNumberSMSCode,
} from '../store/auth/signUp/viaPhoneNumber/signUp.actions';

interface UseSignInReturnType {
    // Sign-up via phone number
    isLoading: boolean;
    signUpHandler: (props: SignUpActionProps) => void;
    error: any;
    response?: any;

    // Verification of the SMS code
    isVerificationInProgress: boolean;
    signUpSMSVerificationHandler: (props: SignUpViaPhoneNumberSMSCode) => void;
    verificationError: any;
    verificationResponse?: any;
}

export const useSignUpViaPhoneNumber = (): UseSignInReturnType => {
    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const isLoading = useMappedState(SignUpSelectors.isLoading);
    const error = useMappedState(SignUpSelectors.error);
    const response = useMappedState(SignUpSelectors.response);

    const isVerificationInProgress = useMappedState(SignUpSMSVerificationSelectors.isLoading);
    const verificationError = useMappedState(SignUpSMSVerificationSelectors.error);
    const verificationResponse = useMappedState(SignUpSMSVerificationSelectors.response);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error.message || 'Error on sign-up', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                autoHideDuration: 2000,
            });
        }

        if (verificationError) {
            enqueueSnackbar(verificationError.message || 'Error on SMS verification', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                },
                autoHideDuration: 2000,
            });
        }
    }, [error, verificationError, enqueueSnackbar]);

    const signUpHandler = (props: SignUpActionProps) => {
        dispatch(signUpAction(props));
    };

    const signUpSMSVerificationHandler = ({ smsCode }: SignUpViaPhoneNumberSMSCode) => {
        dispatch(signUpVerificationAction({ smsCode }));
    };

    console.log('RESPONSE', response);

    return {
        isLoading,
        signUpHandler,
        response,
        error,

        isVerificationInProgress,
        signUpSMSVerificationHandler,
        verificationError,
        verificationResponse,
    };
};
