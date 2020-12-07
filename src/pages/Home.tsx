import React from 'react';
import { Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSignIn } from '../hooks';
import { ProductProps, products } from '../constants/products';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductCategory } from './AddItem';
import { Icons } from '../components/Icons/Icons';
import './Home.scss';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingLeft: theme.spacing(50),
        paddingRight: theme.spacing(50),
        [theme.breakpoints.down('lg')]: {
            paddingLeft: theme.spacing(40),
            paddingRight: theme.spacing(40),
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(30),
            paddingRight: theme.spacing(30),
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
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
}));

const Filter = ({ text, icon }: { text: string; icon: any }) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            disableElevation
            className={classes.button}
            startIcon={icon}
            fullWidth={true}
        >
            {text}
        </Button>
    );
};

const Filters = () => {
    return (
        <Container style={{ marginTop: '15px' }}>
            <Grid container spacing={1} direction="row" justify="space-between" alignItems="center">
                <Grid item={true} xs={12} sm={4}>
                    <Filter text="Future Sales" icon={<Icons.FutureSale />} />
                </Grid>
                <Grid item={true} xs={12} sm={4}>
                    <Filter text="Sale now" icon={<Icons.SaleNow />} />
                </Grid>
                <Grid item={true} xs={12} sm={4}>
                    <Filter text="Categories" icon={<Icons.Categories />} />
                </Grid>
            </Grid>
        </Container>
    );
};

const ProductsRow = ({ rowName, products }: { rowName: string; products: Array<ProductProps> }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} direction="row" justify="center" alignItems="center">
            <Grid item={true} xs={12}>
                <Container className={classes.container}>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item={true} xs={6}>
                            <Typography variant="h6">{rowName}</Typography>
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
            <Grid item={true} xs={12}>
                <div style={{ margin: '10px' }}>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {products.map((card) => {
                            return (
                                <Grid key={card.id} item={true} md={3} sm={4} xs={6}>
                                    <Grid container justify="center">
                                        <ProductCard card={card} />
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </Grid>
        </Grid>
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
                <Filters />
            </Grid>
            <Grid item={true} xs={12}>
                <div className="flex-center">
                    <div className="banner-container">
                        <div className="title">Future Sail</div>
                        <div className="text">Sell today what you buy tomorrow</div>
                        <div className="button">
                            <div className="start-button">START</div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12}>
                <ProductsRow
                    rowName="Future Sale"
                    products={products.filter(
                        (e) => e.category === ProductCategory.WantToBuyAndSell,
                    )}
                />
            </Grid>
            <Grid item xs={12}>
                <ProductsRow
                    rowName="Bet Deals"
                    products={products.filter(
                        (e) => e.category === ProductCategory.WantToSellSomeday,
                    )}
                />
            </Grid>
            <Grid item xs={12}>
                <ProductsRow
                    rowName="Sale now"
                    products={products.filter(
                        (e) => e.category === ProductCategory.CurrentlySelling,
                    )}
                />
            </Grid>
        </Grid>
    );
};
