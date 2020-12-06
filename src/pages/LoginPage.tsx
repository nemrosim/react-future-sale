import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthorizationContext } from '../components/AuthorizationContext';
import {
    Avatar,
    Button,
    Container,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import LOGO_IMAGE from '../assets/Logo.jpg';
import { useSignIn } from '../hooks';
import { useSignUpViaPhoneNumber } from '../hooks/useSignUpViaPhoneNumber';
import firebase from 'firebase';
import { firebase_initializedApp } from '../api/firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100vh',
    },
    grid: {
        height: '100vh',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    logoLarge: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    },
    avatarGrid: {
        position: 'relative',
        bottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            bottom: theme.spacing(3),
            paddingBottom: `0px !important`,
        },
    },
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: '36ch',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    mainText: {
        paddingTop: `0px !important`,
    },
}));

export const LoginPage = ({ pathname }: { pathname: string }) => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [recaptchaData, setRecaptchaData] = useState<any>();
    const { isUserLoggedIn, setIsUserLoggedIn, setUserUID } = useAuthorizationContext();
    const {
        signUpHandler,
        response,
        isLoading,
        signUpSMSVerificationHandler,
        verificationResponse,
    } = useSignUpViaPhoneNumber();

    const classes = useStyles();

    useEffect(() => {
        if (verificationResponse) {
            const uid = firebase_initializedApp.auth().currentUser.uid;

            setUserUID(uid);
            setIsUserLoggedIn(true);
        }
    }, [setUserUID, setIsUserLoggedIn, verificationResponse]);

    if (isUserLoggedIn) {
        return <Redirect to={pathname} />;
    }

    const signUpViaPhoneNumberHandler = () => {
        new Promise((resolve) => {
            // !?? RECAPCHA will not be shown - see the components's styles.scss
            // PLUS -> size is set to invisible
            try {
                if (!recaptchaData) {
                    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
                        'recaptcha-container',
                        {
                            size: 'invisible',
                            // callback: function(response) {
                            //
                            //     // @ts-ignore
                            //     submitPhoneNumberAuth();
                            // },
                        },
                    );
                    setRecaptchaData(recaptchaVerifier);
                    resolve(recaptchaVerifier);
                } else {
                    resolve(recaptchaData);
                }
            } catch (error) {
                console.log(error.message);
            }
        }).then((recaptchaVerifier: firebase.auth.ApplicationVerifier) => {
            signUpHandler({
                phoneNumber,
                recaptcha: recaptchaVerifier,
            });
        });
    };

    const verifySMSCodeHandler = () => {
        signUpSMSVerificationHandler({ smsCode: verificationCode });
    };

    return (
        <div className={classes.root}>
            <div className="for-recapcha">
                <div id="recaptcha-container" />
            </div>
            <Container maxWidth="sm">
                <Grid
                    className={classes.grid}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <Paper elevation={2}>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={4}
                            >
                                <Grid item={true} className={classes.avatarGrid}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={LOGO_IMAGE}
                                        className={classes.logoLarge}
                                    />
                                </Grid>
                                <Grid item={true} className={classes.mainText}>
                                    <Typography variant="h3" component="h3">
                                        Login
                                    </Typography>
                                </Grid>
                                <Grid item={true}>
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        spacing={3}
                                    >
                                        <Grid item={true}>
                                            {isLoading || response ? (
                                                <TextField
                                                    className={classes.textField}
                                                    label="Verification code"
                                                    type="phone"
                                                    variant="outlined"
                                                    value={verificationCode}
                                                    onChange={(event) => {
                                                        setVerificationCode(
                                                            event.currentTarget.value,
                                                        );
                                                    }}
                                                />
                                            ) : (
                                                <TextField
                                                    className={classes.textField}
                                                    label="Phone number"
                                                    type="phone"
                                                    variant="outlined"
                                                    placeholder="+380441111111"
                                                    value={phoneNumber}
                                                    onChange={(event) => {
                                                        setPhoneNumber(event.currentTarget.value);
                                                    }}
                                                />
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item={true}>
                                    <Button
                                        id="sign-in-button"
                                        variant="contained"
                                        color="primary"
                                        onClick={
                                            isLoading || response
                                                ? verifySMSCodeHandler
                                                : signUpViaPhoneNumberHandler
                                        }
                                    >
                                        {isLoading || response
                                            ? 'Send verification code'
                                            : 'Sign up via phone number'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
