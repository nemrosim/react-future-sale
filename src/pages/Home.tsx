import React from 'react';
import { Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSignIn } from '../hooks';
import { ProductProps, products } from '../constants/products';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ProductCategory } from './AddItem';
import { Icons } from '../components/Icons/Icons';

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
    const classes = useStyles();

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
    return (
        <Grid container spacing={1} direction="row" justify="center" alignItems="center">
            <Grid item={true} xs={12}>
                <Container>
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
                        (e) => e.category === ProductCategory.WantToBuyAndSell,
                    )}
                />
            </Grid>
        </Grid>
    );
};
