import React, { useState } from 'react';
import { Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { ProductCategory } from './AddItem';
import { Icons } from '../components/Icons/Icons';
import './Home.scss';
import { ProductProps, products } from '../constants/products';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { useSignIn } from '../hooks';
import { BottomDrawer } from '../components/BottomDrawer';
import { useFilterContext } from '../components/FilterContext';

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
        backgroundColor: 'rgba(1,191,140,0.2)',
        borderRadius: '25px',
        textTransform: 'none',
    },
}));

const Filter = ({ text, icon, onClick }: { text: string; icon: any; onClick: any }) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            disableElevation
            className={classes.button}
            startIcon={icon}
            fullWidth={true}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

const Filters: React.FC<{
    filterCategory: 'all' | ProductCategory;
    setFilterCategory: React.Dispatch<React.SetStateAction<'all' | ProductCategory>>;
}> = ({ filterCategory, setFilterCategory }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    return (
        <Container style={{ marginTop: '15px' }}>
            <Grid container spacing={1} direction="row" justify="space-between" alignItems="center">
                {filterCategory !== 'all' && (
                    <Grid item={true} xs={12} sm={4}>
                        <Filter
                            text="Show all"
                            icon={undefined}
                            onClick={() => {
                                setFilterCategory('all');
                            }}
                        />
                    </Grid>
                )}

                {filterCategory !== ProductCategory.WantToBuyAndSell && (
                    <Grid item={true} xs={12} sm={4}>
                        <Filter
                            text="Future Sales"
                            icon={<Icons.FutureSale />}
                            onClick={() => {
                                setFilterCategory(ProductCategory.WantToBuyAndSell);
                            }}
                        />
                    </Grid>
                )}
                {filterCategory !== ProductCategory.CurrentlySelling && (
                    <Grid item={true} xs={12} sm={4}>
                        <Filter
                            text="Sale now"
                            icon={<Icons.SaleNow />}
                            onClick={() => {
                                setFilterCategory(ProductCategory.CurrentlySelling);
                            }}
                        />
                    </Grid>
                )}

                <Grid item={true} xs={12} sm={4}>
                    <Filter
                        text="Categories"
                        icon={<Icons.Categories />}
                        onClick={() => {
                            setIsDrawerOpen(true);
                        }}
                    />
                    <BottomDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
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
    const { isLoading } = useSignIn();

    const [filterCategory, setFilterCategory] = useState<ProductCategory | 'all'>('all');
    const { filterValue } = useFilterContext();

    if (isLoading) {
        return (
            <Grid container direction="row" justify="center" alignItems="center">
                <Typography variant="h6" noWrap>
                    Loading...
                </Typography>
            </Grid>
        );
    }

    if (filterValue) {
        return (
            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                <Grid item={true} xs={12}>
                    <Filters
                        filterCategory={filterCategory}
                        setFilterCategory={setFilterCategory}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ProductsRow
                        rowName="Future Sale"
                        products={products.filter((e) => e.name.includes(filterValue))}
                    />
                </Grid>
            </Grid>
        );
    }

    return (
        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
            <Grid item={true} xs={12}>
                <Filters filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
            </Grid>
            <Grid item={true} xs={12}>
                <div className="flex-center">
                    <div className="banner-container">
                        <div className="title">Future Sale</div>
                        <div className="text">Sell today what you buy tomorrow</div>
                        <div className="button">
                            <div className="start-button">START</div>
                        </div>
                    </div>
                </div>
            </Grid>
            {filterCategory === 'all' && (
                <>
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
                </>
            )}
            {filterCategory === ProductCategory.CurrentlySelling && (
                <Grid item xs={12}>
                    <ProductsRow
                        rowName="Sale now"
                        products={products.filter(
                            (e) => e.category === ProductCategory.CurrentlySelling,
                        )}
                    />
                </Grid>
            )}
            {filterCategory === ProductCategory.WantToBuyAndSell && (
                <Grid item xs={12}>
                    <ProductsRow
                        rowName="Future Sale"
                        products={products.filter(
                            (e) => e.category === ProductCategory.WantToBuyAndSell,
                        )}
                    />
                </Grid>
            )}
            {filterCategory === ProductCategory.WantToSellSomeday && (
                <Grid item xs={12}>
                    <ProductsRow
                        rowName="Bet Deals"
                        products={products.filter(
                            (e) => e.category === ProductCategory.WantToSellSomeday,
                        )}
                    />
                </Grid>
            )}
        </Grid>
    );
};
