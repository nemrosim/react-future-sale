import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ProductProps } from '../constants/products';
import { Box, Grid } from '@material-ui/core';
import { ProductCategory } from '../pages/AddItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export const ProductLifecycle: React.FC<{ item: ProductProps }> = ({ item }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string>('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    if (item.category === ProductCategory.WantToBuyAndSell) {
        return null;
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className="flex-center text-semi-bold">{`Product's lifecycle`}</div>
            </Grid>
            <Grid item xs={12}>
                <Box mt={2} ml={1} mr={1} mb={2}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Previous owner 1</Typography>
                            <Typography className={classes.secondaryHeading}>
                                User name/When he owned this product
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Some photos/ description. Where/When he bought it.. ect
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>Previous owner 2</Typography>
                            <Typography className={classes.secondaryHeading}>
                                He sold this 3 month ago
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {`Some photos/ description. Where/When he bought it from "Previous owner 1".. Product conditions at that time`}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>Previous owner 3</Typography>
                            <Typography className={classes.secondaryHeading}>
                                Current user bought this product from him
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Lorem ipsum...</Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
        </Grid>
    );
};
