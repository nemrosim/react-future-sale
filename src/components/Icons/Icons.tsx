import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Icon, makeStyles } from '@material-ui/core';

import icon from '../../assets/icons/svg/all.svg';
import { CategoriesIcon } from './CategoriesIcon';
import { FutureSaleIcon } from './FutureSaleIcon';
import { SaleNowIcon } from './SaleNowIcon';

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
    icon: {
        margin: 0,
    },
}));

export const FutureSale: React.FC = () => {
    const classes = useStyles();

    // eslint-disable-next-line no-constant-condition
    if (true) {
        return <FutureSaleIcon />;
    }

    return <FiberManualRecordIcon className={classes.futureIcon} />;
};

export const SaleNow: React.FC = () => {
    const classes = useStyles();

    // eslint-disable-next-line no-constant-condition
    if (true) {
        return <SaleNowIcon />;
    }

    return <FiberManualRecordIcon className={classes.saleNowIcon} />;
};

export const Categories: React.FC = () => {
    const classes = useStyles();

    // eslint-disable-next-line no-constant-condition
    if (true) {
        return <CategoriesIcon />;
    }

    return <FiberManualRecordIcon className={classes.categoriesIcon} />;
};

export const Icons = {
    SaleNow,
    Categories,
    FutureSale,
};
