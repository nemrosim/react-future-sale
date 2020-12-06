import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    Grid,
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    grid: {
        padding: '20px',
        paddingBottom: 0,
    },
    search: {
        position: 'relative',
        borderRadius: '15px',
        border: '2px solid #DAE4ED',
        backgroundColor: fade('#DAE4ED', 0.15),
        '&:hover': {
            backgroundColor: fade('#DAE4ED', 0.45),
        },
        marginLeft: 0,
        width: '100%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '30px',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const PrimarySearchAppBar = () => {
    const classes = useStyles();

    return (
        <>
            <Grid
                container={true}
                className={classes.grid}
                justify="space-between"
                alignItems="center"
                spacing={3}
            >
                <Grid item={true} xs={2} />
                <Grid item={true} xs={8}>
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h4">Future Sale</Typography>
                    </div>
                </Grid>
                <Grid item={true} xs={2}>
                    <Grid container={true} justify="flex-end" alignItems="center" spacing={0}>
                        <IconButton component="span">
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};
