import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

export const About: React.FC = () => {
    const history = useHistory();
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Typography variant="h6" noWrap>
                        About
                    </Typography>
                </Grid>
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
