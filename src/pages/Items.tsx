import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

const SORT = 'sort';
const ORDER = 'order';
const FILTER = 'filter';

const CenteredText: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h6" noWrap>
                {text}
            </Typography>
        </Grid>
    );
};

export const Items: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
    const searchParams: URLSearchParams = new URLSearchParams(location.search);

    const sortSearchParam = searchParams.get(SORT);
    const orderSearchParam = searchParams.get(ORDER);
    const filterSearchParam = searchParams.get(FILTER);

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <CenteredText text="Items" />
                <CenteredText text={sortSearchParam} />
                <CenteredText text={orderSearchParam} />
                <CenteredText text={filterSearchParam} />
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        Home page
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};
