import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Avatar, Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import { AppRoutes } from '../constants';
import { ProductProps, products } from '../constants/products';
import './Item.scss';
import { Icons } from '../components/Icons/Icons';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ReactBnbGallery from 'react-bnb-gallery';
import { ProductLifecycle } from '../components/ProductLifecycle';
import { ProductCategory } from './AddItem';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import { AlertDialog } from '../components/AlertDialog';
import co2 from '../assets/icons/co2.png';
import treeImage from '../assets/icons/tree.png';
import { ReturnToHomeScreenButton } from '../components/ReturnToHomeScreen';

const useStyles = makeStyles((theme) => ({
    avatarIconLarge: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    avatar: {
        backgroundColor: red[500],
        padding: 0,
        width: '50px',
        height: '50px',
    },
    avatarButton: {
        padding: theme.spacing(0),
    },
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
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        },
    },
}));

const TextRow: React.FC<{ left: string; right: string }> = ({ left, right }) => {
    return (
        <>
            <Grid item xs={6} className="flex-center text-semi-bold">
                {`${left} :`}
            </Grid>
            <Grid item xs={6} className="flex-center text-title">
                {right}
            </Grid>
        </>
    );
};

const ImageWithIcon: React.FC<{ item: ProductProps }> = ({ item }) => {
    const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);

    const [isLikesDialogOpen, setIsLikesDialogOpen] = useState<boolean>(false);
    const [isFollowersDialogOpen, setIsFollowersDialogOpen] = useState<boolean>(false);
    const [isAfterTimeDialogOpen, setIsAfterTimeDialogOpen] = useState<boolean>(false);

    const ProductCategoryIcon = () => {
        const { category } = item;

        if (category === ProductCategory.WantToBuyAndSell) {
            return <Icons.FutureSale />;
        }

        if (category === ProductCategory.CurrentlySelling) {
            return <Icons.SaleNow />;
        }

        if (category === ProductCategory.WantToSellSomeday) {
            return <Icons.FutureSale />;
        }
    };

    const categoryDescriptionText = () => {
        const { category } = item;

        // Future Sales
        if (category === ProductCategory.WantToBuyAndSell) {
            return 'Would like to buy this in future';
        }

        if (category === ProductCategory.CurrentlySelling) {
            return '2';
        }

        //
        if (category === ProductCategory.WantToSellSomeday) {
            return 'Want to sell this someday';
        }
    };

    return (
        <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} className="flex-center">
                    <div>
                        <div id="hello" className="flex-end relative-icon">
                            {ProductCategoryIcon()}
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                        <img
                            className="product-profile-image"
                            src={item.images[0].url}
                            alt="Alt"
                            onClick={() => {
                                setIsPhotoGalleryOpen(true);
                            }}
                        />
                        <ReactBnbGallery
                            show={isPhotoGalleryOpen}
                            photos={item.images.map((e) => e.url)}
                            onClose={() => setIsPhotoGalleryOpen(false)}
                        />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="flex-center text-regular">{categoryDescriptionText()}</div>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={2}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item xs={6}>
                                <div className="flex-center">
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        onClick={() => {
                                            setIsLikesDialogOpen(true);
                                        }}
                                    >
                                        <FavoriteBorderOutlinedIcon />
                                    </IconButton>
                                    <AlertDialog
                                        content='Users that "liked" this product will get notifications if something will change with it'
                                        isOpen={isLikesDialogOpen}
                                        setIsOpen={setIsLikesDialogOpen}
                                    />
                                </div>
                                <div className="flex-center text-semi-bold">298</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="flex-center">
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                        onClick={() => {
                                            setIsFollowersDialogOpen(true);
                                        }}
                                    >
                                        <PermIdentityOutlinedIcon />
                                    </IconButton>
                                    <AlertDialog
                                        content="Number of users that following current user"
                                        isOpen={isFollowersDialogOpen}
                                        setIsOpen={setIsFollowersDialogOpen}
                                    />
                                </div>
                                <div className="flex-center text-semi-bold">135</div>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={2}>
                        <div className="flex-center text-semi-bold">
                            Approximate date of possible sell:
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <div className="flex-center text-regular">
                        <Button
                            color="primary"
                            onClick={() => {
                                setIsAfterTimeDialogOpen(true);
                            }}
                        >
                            After 6 moths
                        </Button>
                        <AlertDialog
                            content={`After this time user would like to sell this item.
                             Some description can be added in future.
                             How many time he will use it?
                             When he will use it?
                             Where he will buy it?
                             ect....
                             `}
                            isOpen={isAfterTimeDialogOpen}
                            setIsOpen={setIsAfterTimeDialogOpen}
                        />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

const TextRowsWithSellerAvatar: React.FC<{ item: ProductProps }> = ({ item }) => {
    const classes = useStyles();

    const history = useHistory();

    const getTypeText = () => {
        switch (item.category) {
            case ProductCategory.CurrentlySelling:
                return 'Second hand';
            case ProductCategory.WantToBuyAndSell:
                return 'New';
            case ProductCategory.WantToSellSomeday:
                return 'Second hand';
        }
    };

    return (
        <Grid container spacing={2}>
            <TextRow left="Category" right={item.productCategory} />
            <TextRow left="Product" right={item.productSubCategory} />
            <TextRow left="Type" right={getTypeText()} />
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        <div className="flex-center text-semi-bold">Seller:</div>
                    </Grid>
                    <Grid item xs={6} className="flex-center text-title">
                        <div className="flex-center">
                            <IconButton
                                aria-label="add to favorites"
                                className={classes.avatarButton}
                            >
                                <Avatar
                                    aria-label="recipe"
                                    className={classes.avatar}
                                    src={item.seller.avatar.url}
                                    onClick={() => {
                                        history.push(`${AppRoutes.USERS}/${item.seller.id}`);
                                    }}
                                >
                                    {item.seller.avatar.fallback}
                                </Avatar>
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export const CO: React.FC<{ amount: number }> = ({ amount }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <img style={{ width: '70px', paddingBottom: '10px' }} src={co2} alt="CO2" />
            </div>
            <div className="co2-container">
                <div style={{ fontWeight: 900 }}>{`${amount} kg`}</div>
                <div>CO2/year</div>
            </div>
        </div>
    );
};

export const Trees: React.FC<{ amount: number }> = ({ amount }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <img style={{ width: '70px', paddingBottom: '10px' }} src={treeImage} alt="CO2" />
            </div>
            <div className="co2-container">
                <div style={{ fontWeight: 900 }}>{amount}</div>
                <div>Trees saved</div>
            </div>
        </div>
    );
};

export const Item: React.FC<RouteComponentProps<{ itemId: string }>> = ({ history, match }) => {
    const { params } = match;

    const [item, setItem] = useState<ProductProps>();
    const classes = useStyles();

    const { itemId } = params;

    useEffect(() => {
        if (itemId) {
            const item = products.find((e) => e.id === itemId);
            if (item) {
                setItem(item);
            }
        }
    }, [itemId]);

    if (item) {
        return (
            <Container className={classes.container}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <div className="flex-center text-bold" style={{ paddingTop: '20px' }}>
                            {item.name}
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <ImageWithIcon item={item} />
                            {/* Text rows with Seller Avatar*/}
                            <Grid item xs={12} className="flex-center">
                                <TextRowsWithSellerAvatar item={item} />
                            </Grid>
                            <Grid item xs={12}>
                                <ProductLifecycle item={item} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={6} className="flex-center">
                                <CO amount={item.co2PollutionPerYear} />
                            </Grid>
                            <Grid item xs={6} className="flex-center">
                                <Trees amount={item.treesSaved} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <ReturnToHomeScreenButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    } else {
        return <div>Loading...</div>;
    }
};
