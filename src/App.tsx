import React from 'react';
import { Header } from './components/Header';
import { Route, Switch, useLocation } from 'react-router-dom';
import { About, Home, Item, Items } from './pages';
import { AppRoutes } from './constants';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { LoginPage } from './pages/LoginPage';
import { AddItem } from './pages/AddItem';

import './transition.scss';
import './fade-transition.scss';
import './assets/styles/text-styles.scss';

import { SellerProfile } from './pages/SellerProfile/SellerProfile';

const PageNotFound = () => {
    return (
        <>
            <div>Page not found</div>
        </>
    );
};

export const App = () => {
    let location = useLocation();

    return (
        <>
            <Header />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="simple-fade"
                    unmountOnExit={true}
                    timeout={300}
                    onEnter={() => {
                        console.log('On enter');
                    }}
                    onExit={() => {
                        console.log('onExit');
                    }}
                >
                    <Switch location={location}>
                        <Route path={AppRoutes.LOGIN} component={LoginPage} exact={true} />
                        <Route path={AppRoutes.ABOUT} component={About} exact={true} />
                        <Route path={AppRoutes.ITEMS} component={Items} exact={true} />
                        <Route path={`${AppRoutes.ITEMS}/:itemId`} component={Item} exact={true} />
                        <Route
                            path={`${AppRoutes.USERS}/:userId`}
                            component={SellerProfile}
                            exact={true}
                        />
                        <Route path={`${AppRoutes.ADD_ITEM}`} component={AddItem} exact={true} />
                        <Route path={AppRoutes.HOME} component={Home} exact={true} />
                        <Route component={PageNotFound} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};
