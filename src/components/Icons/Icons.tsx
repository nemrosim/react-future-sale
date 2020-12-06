import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    futureIcon: {
        color: '#32C5FF',
    },
    saleNowIcon: {
        color: '#4EE01E',
    },
    categoriesIcon: {
        color: 'white',
    },
}));

export const FutureSale: React.FC = () => {
    const classes = useStyles();

    return <FiberManualRecordIcon className={classes.futureIcon} />;
};

export const SaleNow: React.FC = () => {
    const classes = useStyles();

    return <FiberManualRecordIcon className={classes.saleNowIcon} />;
};

export const Categories: React.FC = () => {
    const classes = useStyles();

    return <FiberManualRecordIcon className={classes.categoriesIcon} />;
};

export const Icons = {
    SaleNow,
    Categories,
    FutureSale,
};
