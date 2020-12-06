import React, { useContext, useEffect, useState } from 'react';
import { AppRoutes, LocalStorageKeys } from '../../constants';
import { axiosInstance } from '../../api';
import jwt from 'jsonwebtoken';
import { TokenUserData } from '../../api/mocks/auth/signIn';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { LoginPage } from '../../pages/LoginPage';
import { firebase_initializedApp } from '../../api/firebase';

type TokenData = TokenUserData & { iat: number };

export interface ContextProps {
    isUserLoggedIn: boolean;
    setIsUserLoggedIn: Function;
    userUID: string;
    setUserUID: Function;
}

export const initialState: ContextProps = {
    isUserLoggedIn: undefined,
    setIsUserLoggedIn: undefined,
    userUID: undefined,
    setUserUID: () => undefined,
};

export const AuthorizationContext = React.createContext<ContextProps>(initialState);

export const AuthorizationProvider: React.FC = ({ children }) => {
    const [userUID, setUserUID] = useState<string>();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>();

    const [pathname, setPathname] = useState<string>();
    const location = useLocation();

    /**
     * When application is staring, we need to save
     * path of that page, that user wanted to open
     * at the first place
     */
    useEffect(() => {
        if (!pathname) {
            setPathname(location.pathname);
        }
    }, [location.pathname, pathname]);

    useEffect(() => {
        firebase_initializedApp.auth().onAuthStateChanged((userAuth) => {
            console.log('User auth', userAuth);
            if (userAuth) {
                setIsUserLoggedIn(true);
            }
        });
    }, []);

    return (
        <AuthorizationContext.Provider
            value={{
                isUserLoggedIn,
                setIsUserLoggedIn,
                userUID,
                setUserUID,
            }}
        >
            {isUserLoggedIn ? <>{children}</> : <Redirect to={AppRoutes.LOGIN} />}
            {/* Login page should not be in a Switch. We don't want
            to show nav-bar to user, that is not logged in*/}
            <Route
                path={AppRoutes.LOGIN}
                render={() => {
                    return <LoginPage pathname={pathname} />;
                }}
            />
        </AuthorizationContext.Provider>
    );
};

export const useAuthorizationContext = (): ContextProps =>
    useContext<ContextProps>(AuthorizationContext);
