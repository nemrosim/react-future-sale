import { Box, Button } from '@material-ui/core';
import { AppRoutes } from '../constants';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useFilterContext } from './FilterContext';

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: '15px',
        backgroundColor: '#00ddb8',
        color: 'black',
    },
}));

export const ReturnToHomeScreenButton: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const { setFilterValue } = useFilterContext();

    return (
        <Box m={5}>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => {
                    setFilterValue('');
                    history.push(AppRoutes.HOME);
                }}
            >
                Return to home page
            </Button>
        </Box>
    );
};
