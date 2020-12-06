import { AxiosErrorHandler } from './AxiosErrorHandler';

export enum ReducerPropNames {
    data = 'data',
    loading = 'loading',
    error = 'error',
}

export const setStateOnRequest = ({ defaultDataState, draft }: any): void => {
    console.log('DEFAULT', defaultDataState);
    draft[ReducerPropNames.data] = defaultDataState;
    draft[ReducerPropNames.loading] = true;
    draft[ReducerPropNames.error] = null;
};

export const setStateOnSuccess = ({ draft, action }: any): void => {
    draft[ReducerPropNames.data] = action.payload;
    draft[ReducerPropNames.loading] = false;
    draft[ReducerPropNames.error] = null;
};

export const setStateOnError = ({ defaultDataState, draft, action }: any): void => {
    draft[ReducerPropNames.data] = defaultDataState;
    draft[ReducerPropNames.loading] = false;
    draft[ReducerPropNames.error] = action.payload;
};

export const getInitialState = (dataDefaultState: any) => ({
    [ReducerPropNames.data]: dataDefaultState,
    [ReducerPropNames.loading]: false,
    [ReducerPropNames.error]: null,
});

interface AllInOneProps {
    request: any;
    success: any;
    error: any;
    defaultDataState: any;
    draft: any;
    action: any;
}

export const allInOne = ({
    request,
    success,
    error,
    defaultDataState,
    draft,
    action,
}: AllInOneProps) => {
    switch (action.type) {
        case request:
            setStateOnRequest({ defaultDataState, draft });
            break;
        case success:
            setStateOnSuccess({ draft, action });
            break;
        case error:
            setStateOnError({ defaultDataState, draft, action });
            break;
        default:
            break;
    }
};

export const allInOneWithReset = ({
    request,
    success,
    error,
    reset,
    defaultDataState,
    draft,
    action,
}: any) => {
    switch (action.type) {
        case request:
            setStateOnRequest({ defaultDataState, draft });
            break;
        case success:
            setStateOnSuccess({ draft, action });
            break;
        case error:
            setStateOnError({ defaultDataState, draft, action });
            break;
        case reset:
            return getInitialState(defaultDataState);
        default:
            break;
    }
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = ({ error }: any) => {
    console.log({
        code: error.code,
        message: error.message,
    });

    return AxiosErrorHandler.errorConsoleLog(error);
};
