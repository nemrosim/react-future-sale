import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Avatar, Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import './SellerProfile.scss';
import { AppRoutes } from '../../constants';
import { SellerProps, sellers } from '../../constants/products';
import bicycle from '../../assets/icons/bicycle.png';
import books from '../../assets/icons/books.png';
import notebook from '../../assets/icons/notebook.png';
import tree from '../../assets/icons/tree.png';
import { CO, Trees } from '../Item';
import { ReturnToHomeScreenButton } from '../../components/ReturnToHomeScreen';

const useStyles = makeStyles((theme) => ({
    avatarIconLarge: {
        width: theme.spacing(20),
        height: theme.spacing(20),
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

const Center: React.FC = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
        >
            {children}
        </div>
    );
};

const soldProducts = [
    {
        id: '1',
        itemCategory: books,
        amount: 5,
        co2KillosNotPoluted: 110,
    },
    {
        id: '2',
        itemCategory: bicycle,
        amount: 1,
        co2KillosNotPoluted: 250,
    },
    {
        id: '3',
        itemCategory: notebook,
        amount: 2,
        co2KillosNotPoluted: 320,
    },
];

const SoldItems: React.FC = () => {
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item={true} xs={12}>
                {soldProducts.map((e) => {
                    return (
                        <Grid container key={e.id}>
                            <Grid item={true} xs={3} />

                            <Grid item={true} xs={3}>
                                <Center>
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                        className="item-category-image"
                                        src={e.itemCategory}
                                        alt="image"
                                    />
                                </Center>
                            </Grid>
                            <Grid item={true} xs={3}>
                                <div className="flex-center text-semi-bold">{e.amount}</div>
                            </Grid>
                            <Grid item={true} xs={3} />
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item={true} xs={12}>
                <Box m={3}>
                    <div className="flex-center">
                        <div className="saved-resources text-bold">Total amount</div>
                    </div>
                    <div className="flex-center text-semi-bold">
                        {soldProducts
                            .map((e) => e.amount)
                            .reduce((accumulator, currentValue) => accumulator + currentValue)}
                    </div>
                </Box>
                <Box m={3}>
                    <div className="flex-center">
                        <div className="saved-resources text-bold">Details :</div>
                    </div>
                </Box>
            </Grid>
            <Grid item={true} xs={12}>
                <Grid container justify="center" alignItems="center">
                    <Grid item={true} xs={12}>
                        <Box m={3}>
                            <div className="flex-center">
                                <div className="saved-resources text-bold">
                                    Saved planet resources :
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={6} className="flex-center">
                                <CO amount={1256} />
                            </Grid>
                            <Grid item xs={6} className="flex-center">
                                <Trees amount={345} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const UserData: React.FC<{ user: SellerProps }> = ({ user }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item={true} xs={12} className="flex-center">
                <Box m={3}>
                    <Avatar
                        alt={user.avatar.fallback}
                        src={user.avatar.url}
                        className={classes.avatarIconLarge}
                    />
                </Box>
            </Grid>
            <Grid item={true} xs={12}>
                <div className="flex-center text-bold">{`${Number(user.rating).toFixed(2)}`}</div>
                <Center>
                    <Rating name="size-large" defaultValue={user.rating} size="large" />
                </Center>
                <Center>
                    <Grid container spacing={1}>
                        <Grid item={true} xs={8}>
                            <div className="flex-center text-semi-bold">ECO points:</div>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <div className="text-bold">{user.ecoPoints}</div>
                        </Grid>
                    </Grid>
                </Center>
                <Center>
                    <Grid container>
                        <Grid item={true} xs={8}>
                            <div className="flex-center text-semi-bold">CO2 saved:</div>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <div className="text-bold">{user.co2Saved}</div>
                        </Grid>
                    </Grid>
                </Center>
            </Grid>
            <div style={{ paddingTop: '20px' }}>
                <Grid item={true} xs={12}>
                    <Center>
                        <Box m={2}>
                            <div className="user-name">{user.name}</div>
                        </Box>
                    </Center>
                </Grid>
                <Grid item={true} xs={12}>
                    <Center>
                        <div className="user-location">{user.location}</div>
                    </Center>
                </Grid>
                <Grid item={true} xs={12}>
                    <Grid container>
                        <Grid item={true} xs={6}>
                            <Box m={2}>
                                <div className="flex-center text-semi-bold">Interests:</div>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={6}>
                            <Box m={2}>
                                <div className="flex-center text-semi-bold">
                                    {user.interests.join(', ')}
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <Box m={2}>
                                <div className="flex-center text-bold">Sold products</div>
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12}>
                            <SoldItems />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
};

export const SellerProfile: React.FC<RouteComponentProps<{ userId: string }>> = ({
    history,
    match,
}) => {
    const [user, setUser] = useState<SellerProps>();

    const classes = useStyles();

    const { params } = match;

    const { userId } = params;

    useEffect(() => {
        if (userId) {
            const user = sellers.find((e) => e.id === userId);
            if (user) {
                setUser(user);
            }
        }
    }, [userId]);

    return (
        <Container className={classes.container}>
            <Box pt={3}>
                <Grid container direction="row" justify="center" alignItems="center">
                    {user && <UserData user={user} />}
                    <Grid item xs={12}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <ReturnToHomeScreenButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};
