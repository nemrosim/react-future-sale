import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';
import { AppRoutes } from '../constants';

export const Item: React.FC<RouteComponentProps<{ itemId: string }>> = ({ history, match }) => {
    const { params } = match;

    const { itemId } = params;

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Typography variant="h6" noWrap>
                        Item id: {itemId}
                    </Typography>
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
};
