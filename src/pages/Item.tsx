import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Avatar, Button, Grid, makeStyles } from '@material-ui/core';
import { AppRoutes } from '../constants';
import { ProductProps, products } from '../constants/products';
import './Item.scss';
import { Icons } from '../components/Icons/Icons';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ReactBnbGallery from 'react-bnb-gallery';

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

export const Item: React.FC<RouteComponentProps<{ itemId: string }>> = ({ history, match }) => {
    const { params } = match;
    const classes = useStyles();

    const [item, setItem] = useState<ProductProps>();

    const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);

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
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <div className="flex-center text-bold" style={{ paddingTop: '20px' }}>
                        {item.name}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} className="flex-center">
                            <div>
                                <div id="hello" className="flex-end relative-icon">
                                    <Icons.FutureSale />
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

                        <Grid item xs={12} className="flex-center">
                            <Grid container spacing={2}>
                                <TextRow left="Product" right="Book" />
                                <TextRow left="Category" right="Books" />
                                <TextRow left="Type" right="Second hand" />
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <div className="flex-center text-semi-bold">
                                                Seller:
                                            </div>
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
                                                            history.push(
                                                                `${AppRoutes.USERS}/${item.seller.id}`,
                                                            );
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
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                history.push(AppRoutes.HOME);
                            }}
                        >
                            Home page
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else {
        return <div>Loading...</div>;
    }
};
