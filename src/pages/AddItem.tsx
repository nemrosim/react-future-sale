import React, { useEffect, useMemo, useState } from 'react';
import {
    Button,
    Card,
    CardMedia,
    Chip,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    TextField,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FaceIcon from '@material-ui/icons/Face';
import { ReturnToHomeScreenButton } from '../components/ReturnToHomeScreen';
import howItCouldLook from '../assets/How it could look.jpg';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
    },
    card: {
        maxWidth: 345,
    },
    cardMedia: {
        height: 345,
        width: 345,
    },
    multipleSelectFormControl: {
        margin: theme.spacing(1),
        minWidth: 195,
    },
}));

export enum ProductCategory {
    WantToBuyAndSell = 'WantToBuyAndSell',
    WantToSellSomeday = 'WantToSellSomeday',
    CurrentlySelling = 'CurrentlySelling',
}

const MultipleSelect = ({ category, setCategory }) => {
    const classes = useStyles();

    const HelperText = useMemo(() => {
        let helpertext = '';

        switch (category) {
            case ProductCategory.WantToBuyAndSell:
                helpertext = 'It means that you would like to buy this product';
                break;
            default:
                helpertext = '';
                break;
        }

        return (
            <>
                <FormHelperText>{helpertext}</FormHelperText>
                <Chip
                    variant="outlined"
                    size="small"
                    icon={<FaceIcon />}
                    label='What is "Product category"'
                    clickable
                    color="primary"
                    onClick={() => {
                        alert('clicked');
                    }}
                />
            </>
        );
    }, [category]);

    return (
        <>
            <FormControl variant="outlined" className={classes.multipleSelectFormControl}>
                <InputLabel>Product category</InputLabel>
                <Select
                    value={category}
                    onChange={(event) => {
                        const value = event.target.value;

                        setCategory(value as ProductCategory);
                    }}
                    label="Age"
                >
                    <MenuItem value={ProductCategory.WantToBuyAndSell}>
                        I want to buy and sell it after...
                    </MenuItem>
                    <MenuItem value={ProductCategory.WantToSellSomeday}>Will sell someday</MenuItem>
                    <MenuItem value={ProductCategory.CurrentlySelling}>Currently selling</MenuItem>
                </Select>
                {HelperText}
            </FormControl>
        </>
    );
};

const MultipleDateSelect = ({ amountOfMonths, setAmountOfMonths }) => {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.multipleSelectFormControl}>
            <InputLabel>Amount of mounts</InputLabel>
            <Select
                value={amountOfMonths}
                onChange={(event) => {
                    const value = event.target.value;

                    console.log('Value', value);

                    setAmountOfMonths(value as string);
                }}
                label="Age"
            >
                <MenuItem value={1}>1 month</MenuItem>
                <MenuItem value={2}>3 months</MenuItem>
                <MenuItem value={6}>6 months</MenuItem>
                <MenuItem value={12}>1 year</MenuItem>
            </Select>
        </FormControl>
    );
};

export const AddItem = () => {
    const history = useHistory();
    const classes = useStyles();

    const [category, setCategory] = useState<ProductCategory>();
    const [amountOfMonths, setAmountOfMonths] = useState<string>();

    const [photo, setPhoto] = useState<File>();
    const [photoBase64, setPhotoBase64] = useState<any>();

    const [productName, setProductName] = useState<string>('');

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    useEffect(() => {
        if (photo) {
            toBase64(photo).then((result) => {
                setPhotoBase64(result);
            });
        }
    }, [photo]);

    return (
        <Paper elevation={3} className={classes.paper}>
            <Grid spacing={3} container direction="column" justify="center" alignItems="center">
                {photoBase64 && (
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={photoBase64}
                                title="Contemplative Reptile"
                            />
                        </Card>
                    </Grid>
                )}
                {!photoBase64 && (
                    <Grid item>
                        <Button variant="contained" component="label">
                            Upload File
                            <input
                                type="file"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                hidden
                            />
                        </Button>
                    </Grid>
                )}
                <Grid item={true} xs={12}>
                    <TextField
                        fullWidth={true}
                        label="Name of the product"
                        variant="outlined"
                        placeholder="What is this?"
                        value={productName}
                        onChange={(event) => {
                            setProductName(event.currentTarget.value);
                        }}
                    />
                </Grid>

                <Grid item={true} xs={12}>
                    <div className="flex-center">
                        <img src={howItCouldLook} alt="How it" />
                    </div>
                </Grid>

                <Grid item={true}>
                    <ReturnToHomeScreenButton />
                </Grid>
            </Grid>
        </Paper>
    );
};
