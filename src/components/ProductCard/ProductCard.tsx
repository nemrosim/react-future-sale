import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ProductProps } from '../../constants/products';
import Rating from '@material-ui/lab/Rating';
import { Box, Button, Icon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import PhotoCameraOutlined from '@material-ui/icons/PhotoCameraOutlined';

import { FavoriteOutlined } from '@material-ui/icons';

import 'react-bnb-gallery/dist/style.css';
import ReactBnbGallery from 'react-bnb-gallery';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
        [theme.breakpoints.down('sm')]: {
            width: 166.5,
        },
        [theme.breakpoints.down('xs')]: {
            width: 300,
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
    },
}));

export const ProductCard: React.FC<{ card: ProductProps }> = ({ card }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={card.images[0].url} title="Paella dish">
                <Button
                    variant="contained"
                    color="default"
                    size="small"
                    className={classes.iconButton}
                    startIcon={<PhotoCameraOutlined />}
                    onClick={() => {
                        setIsPhotoGalleryOpen(true);
                    }}
                >
                    {card.images.length}
                </Button>
                <ReactBnbGallery
                    show={isPhotoGalleryOpen}
                    photos={card.images.map((e) => e.url)}
                    onClose={() => setIsPhotoGalleryOpen(false)}
                />
            </CardMedia>
            <CardContent>
                <Typography variant="h6">{`$ ${card.cost}`}</Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                    {card.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Avatar aria-label="recipe" className={classes.avatar} src={card.avatar.url}>
                        {card.avatar.fallback}
                    </Avatar>
                </IconButton>
                <Icon>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {card.userRating}
                    </Typography>
                    <Rating name="read-only" size="medium" value={card.userRating} readOnly />
                </Icon>
                <IconButton className={classes.expand} aria-label="show more">
                    <FavoriteOutlined />
                </IconButton>
            </CardActions>
        </Card>
    );
};
