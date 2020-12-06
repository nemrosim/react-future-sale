import React, { MouseEventHandler } from 'react';
import { Box, Button, Container, Fab, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSignIn } from '../hooks';
import { AppRoutes } from '../constants';
import AddIcon from '@material-ui/icons/Add';
import { products } from '../constants/products';
import { ProductCard } from '../components/ProductCard/ProductCard';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    button: {
        backgroundColor: '#DDEAF3',
        borderRadius: '25px',
        textTransform: 'none',
    },
    futureIcon: {
        color: '#32C5FF',
    },
    saleNowIcon: {
        color: '#4EE01E',
    },
    categoriesIcon: {
        color: 'white',
    },
}));

const MaterialCenteredButton: React.FC<{ buttonText: string; onClick: MouseEventHandler }> = ({
    buttonText,
    onClick,
}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Button variant="contained" color="primary" onClick={onClick}>
                {buttonText}
            </Button>
        </Grid>
    );
};

const FloatingButton = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Fab
            variant="extended"
            color="primary"
            aria-label="add"
            className={classes.fab}
            onClick={() => {
                history.push(AppRoutes.ADD_ITEM);
            }}
        >
            <AddIcon />I want to sell some stuff
        </Fab>
    );
};

export const Home: React.FC = () => {
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();

    const classes = useStyles();

    const { isLoading } = useSignIn();

    if (isLoading) {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Typography variant="h6" noWrap>
                    Loading...
                </Typography>
            </Grid>
        );
    }

    return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item={true} xs={12}>
                <Container>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item={true}>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={
                                    <FiberManualRecordIcon className={classes.categoriesIcon} />
                                }
                            >
                                Categories
                            </Button>
                        </Grid>
                        <Grid item={true}>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                disableRipple
                                startIcon={<FiberManualRecordIcon className={classes.futureIcon} />}
                            >
                                Future Sales
                            </Button>
                        </Grid>
                        <Grid item={true}>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                disableRipple
                                startIcon={
                                    <FiberManualRecordIcon className={classes.saleNowIcon} />
                                }
                            >
                                Sale now
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} direction="row" justify="center" alignItems="center">
                    <Grid item={true} xs={12}>
                        <Container>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item={true} xs={6}>
                                    <Typography variant="h6">Future Sale</Typography>
                                </Grid>
                                <Grid item={true} xs={6} justify="flex-end">
                                    <div style={{ textAlign: 'right' }}>
                                        <Link
                                            component="button"
                                            variant="body2"
                                            onClick={() => {
                                                console.info("I'm a button.");
                                            }}
                                        >
                                            View all
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    {products.map((card) => {
                        return (
                            <Grid key={card.id} item={true} md={3} sm={4} xs={12}>
                                <Grid container justify="center">
                                    <ProductCard card={card} />
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>

                <MaterialCenteredButton
                    buttonText="Items page"
                    onClick={() => history.push(AppRoutes.ITEMS)}
                />
                <MaterialCenteredButton
                    buttonText="Item page"
                    onClick={() => history.push(`${AppRoutes.ITEMS}/123`)}
                />
                <MaterialCenteredButton
                    buttonText="About page"
                    onClick={() => history.push(AppRoutes.ABOUT)}
                />
                <MaterialCenteredButton
                    buttonText="Show notification"
                    onClick={() =>
                        enqueueSnackbar('Hello world', {
                            variant: 'success',
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'center',
                            },
                            autoHideDuration: 2000,
                        })
                    }
                />
                <FloatingButton />
                {/*<MaterialCenteredButton*/}
                {/*    buttonText="Sign in"*/}
                {/*    onClick={() => {*/}
                {/*        const user = MockedUsers.find((e) => e.login === 'admin');*/}
                {/*        signInHandler({*/}
                {/*            login: user.login,*/}
                {/*            password: user.password,*/}
                {/*        });*/}
                {/*    }}*/}
                {/*/>*/}
                {/*{response?.token && (*/}
                {/*    <Grid container direction="row" justify="center" alignItems="center">*/}
                {/*        <Typography variant="h6" noWrap>*/}
                {/*            {response.token}*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                {/*)}*/}
            </Grid>
        </Grid>
    );
};
