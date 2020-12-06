import React from 'react';
import { PrimarySearchAppBar } from './components/PrimarySearchAppBar';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { Route, Switch, useLocation } from 'react-router-dom';
import { About, Items, Item, Home } from './pages';
import { AppRoutes } from './constants';
import { useAuthorizationContext } from './components/AuthorizationContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './transition.scss';
import './fade-transition.scss';
import { LoginPage } from './pages/LoginPage';
import { AddItem } from './pages/AddItem';
import { SimpleBottomNavigation } from './components/SimpleBottomNavigation';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
        },
    },
}));

export const App = () => {
    const { userUID } = useAuthorizationContext();

    let location = useLocation();

    const classes = useStyles();

    return (
        <>
            <PrimarySearchAppBar />
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
                        <Route path={`${AppRoutes.ADD_ITEM}`} component={AddItem} exact={true} />
                        <Route path={AppRoutes.HOME} component={Home} exact={true} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <SimpleBottomNavigation />
        </>
    );
};
