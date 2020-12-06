import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import './SellerProfile.scss';
import { AppRoutes } from '../../constants';
import { SellerProps, sellers } from '../../constants/products';
import bicycle from '../../assets/icons/bicycle.png';
import books from '../../assets/icons/books.png';
import notebook from '../../assets/icons/notebook.png';
import tree from '../../assets/icons/tree.png';

const useStyles = makeStyles((theme) => ({
    avatarIconLarge: {
        width: theme.spacing(7),
        height: theme.spacing(7),
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
                            <Grid item={true} xs={6}>
                                <Center>
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img
                                        className="item-category-image"
                                        src={e.itemCategory}
                                        alt="image"
                                    />
                                </Center>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <Center>Amount</Center>
                                <Center>{e.amount}</Center>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item={true} xs={12}>
                <div>
                    <Center>
                        <div className="saved-resources">Total amount</div>
                    </Center>
                    <Center>
                        {soldProducts
                            .map((e) => e.amount)
                            .reduce((accumulator, currentValue) => accumulator + currentValue)}
                    </Center>
                </div>
                <Center>
                    <div className="saved-resources">Details:</div>
                </Center>
            </Grid>
            <Grid item={true} xs={12}>
                <Grid container justify="center" alignItems="center">
                    <Grid item={true} xs={12}>
                        <div className="flex-center saved-resources">Saved planet resources</div>
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Grid container>
                            {soldProducts.map((e) => {
                                return (
                                    <React.Fragment key={e.id}>
                                        <Grid item={true} xs={4}>
                                            <div className="flex-center title-text">{`${e.amount} Items sold`}</div>
                                        </Grid>
                                        <Grid item={true} xs={2}>
                                            <Center>
                                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                                <img
                                                    className="item-category-image"
                                                    src={e.itemCategory}
                                                    alt="image"
                                                />
                                            </Center>
                                        </Grid>
                                        <Grid item={true} xs={6}>
                                            <div className="flex-center title-text">
                                                {`${e.co2KillosNotPoluted} kilos was not polluted`}
                                            </div>
                                        </Grid>
                                    </React.Fragment>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item={true} xs={12}>
                <div className="flex-center saved-resources">35 trees saved</div>
                <div className="flex-center">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="tree-image" src={tree} alt="image" />
                </div>
            </Grid>
        </Grid>
    );
};

const UserData: React.FC<{ user: SellerProps }> = ({ user }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item={true} xs={6}>
                <Center>
                    <Avatar
                        alt="Remy Sharp"
                        src={user.avatar.url}
                        className={classes.avatarIconLarge}
                    />
                </Center>
            </Grid>
            <Grid item={true} xs={6}>
                <Center>{user.rating}</Center>
                <Center>
                    <Rating name="size-large" defaultValue={user.rating} size="large" />
                </Center>
                <Center>
                    <Grid container spacing={1}>
                        <Grid item={true} xs={8}>
                            ECO points:
                        </Grid>
                        <Grid item={true} xs={4}>
                            {user.ecoPoints}
                        </Grid>
                    </Grid>
                </Center>
                <Center>
                    <Grid container>
                        <Grid item={true} xs={8}>
                            CO2 saved:
                        </Grid>
                        <Grid item={true} xs={4}>
                            {user.co2Saved}
                        </Grid>
                    </Grid>
                </Center>
            </Grid>
            <div style={{ paddingTop: '20px' }}>
                <Grid item={true} xs={12}>
                    <Center>
                        <div className="user-name">{user.name}</div>
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
                            <Center>Interests:</Center>
                        </Grid>
                        <Grid item={true} xs={6}>
                            {user.interests.join(', ')}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                    <Grid container>
                        <Grid item={true} xs={12}>
                            <Center>Sold products</Center>
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
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Typography variant="h6" noWrap>
                        User id: {userId}
                    </Typography>
                </Grid>
            </Grid>
            {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}

            {user && <UserData user={user} />}

            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            history.push(AppRoutes.HOME);
                        }}
                    >
                        Return to Home page
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
