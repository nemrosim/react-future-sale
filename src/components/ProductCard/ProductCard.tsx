import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import { ProductProps } from '../../constants/products';
import { Button, CardActionArea } from '@material-ui/core';
import PhotoCameraOutlined from '@material-ui/icons/PhotoCameraOutlined';
import StarIcon from '@material-ui/icons/Star';

import { FavoriteOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

import './ProductCard.scss';

import 'react-bnb-gallery/dist/style.css';
import ReactBnbGallery from 'react-bnb-gallery';
import { Icons } from '../Icons/Icons';
import { ProductCategory } from '../../pages/AddItem';
import { AppRoutes } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
        border: '1px solid #DAE4ED',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            width: 200,
        },
        [theme.breakpoints.down('xs')]: {
            width: 166,
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
        padding: 0,
        width: '23px',
        height: '23px',
    },
    iconButton: {
        position: 'relative',
        borderRadius: '250px',
        bottom: '110px',
        margin: theme.spacing(1),
        opacity: 0.7,
        [theme.breakpoints.down('sm')]: {
            bottom: '95px',
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '86px',
        },
    },
    filterIconButton: {
        position: 'relative',
        borderRadius: '250px',
        bottom: '110px',
        margin: theme.spacing(0),
        padding: theme.spacing(0),
        opacity: 0.9,
        [theme.breakpoints.down('sm')]: {
            bottom: '95px',
        },
        [theme.breakpoints.down('xs')]: {
            bottom: '86px',
        },
    },
    avatarButton: {
        padding: theme.spacing(0),
    },
    cardContent: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
    cardActions: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    starIcon: {
        height: '10.48px',
        width: '10.48px',
        color: '#BFD4E4',
    },
}));

export const ProductCard: React.FC<{ card: ProductProps }> = ({ card }) => {
    const classes = useStyles();
    const history = useHistory();

    const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);

    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={() => {
                    !isPhotoGalleryOpen && history.push(`${AppRoutes.ITEMS}/${card.id}`);
                }}
            >
                <CardMedia className={classes.media} image={card.images[0].url} title="Paella dish">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        className={classes.iconButton}
                        startIcon={<PhotoCameraOutlined />}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsPhotoGalleryOpen(true);
                        }}
                    >
                        {card.images.length}
                    </Button>
                    {card.category === ProductCategory.CurrentlySelling ? (
                        <IconButton size="medium" className={classes.filterIconButton}>
                            <Icons.SaleNow />
                        </IconButton>
                    ) : (
                        <IconButton size="medium" className={classes.filterIconButton}>
                            <Icons.FutureSale />
                        </IconButton>
                    )}

                    <ReactBnbGallery
                        show={isPhotoGalleryOpen}
                        photos={card.images.map((e) => e.url)}
                        onClose={() => setIsPhotoGalleryOpen(false)}
                    />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <div className="product-content">
                        <div className="cost">{`$ ${card.cost}`}</div>
                        <div className="name">{card.name}</div>
                        <div className="description">{card.description}</div>
                        <div className="location">{card.location}</div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="add to favorites" className={classes.avatarButton}>
                    <Avatar
                        aria-label="recipe"
                        className={classes.avatar}
                        src={card.seller.avatar.url}
                        onClick={() => {
                            history.push(`${AppRoutes.USERS}/${card.seller.id}`);
                        }}
                    >
                        {card.seller.avatar.fallback}
                    </Avatar>
                </IconButton>
                <div className="user-rating">{card.seller.rating}</div>
                <StarIcon className={classes.starIcon} />
                <IconButton className={classes.expand} aria-label="show more">
                    <FavoriteOutlined />
                </IconButton>
            </CardActions>
        </Card>
    );
};
