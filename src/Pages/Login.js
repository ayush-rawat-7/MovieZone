import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'

import loginBackground from "../utilities/images/avengers.jpg"
import avengersLogo from "../utilities/images/avengersLogo.png"
import { useHistory } from 'react-router'


const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        position: "relative",
        marginBottom: "-1.2em"
    },
    loginButton: {
        fontSize: '1.4rem',
        textTransform: 'none',
        height: '60px',
        color: 'white',
        width: '16em',
        borderRadius: "5px",
        backgroundColor: theme.palette.common.carrot,
        "&:hover": {
            backgroundColor: theme.palette.common.carrotLight
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            width: "14em",
            height: "50px"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            width: "10em",
            height: "50px",
            marginTop:"-1em"
        }
    },
    title: {
        marginBottom: "1.25em",
        zIndex: "2000"
    },
    back: {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        opacity: "0.3"
    },
    h1: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "5em",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "4em",
        },
    },
    triangle: {
        backgroundColor: theme.palette.common.lightBlue,
        minWidth: "40em",
        minHeight: "40em",
        position: "absolute",
        transform: "rotate(45deg)",
        left: "-20em",
        top: "-20em",
        [theme.breakpoints.down('md')]: {
            minWidth: "30em",
            minHeight: "30em",
            left: "-15em",
            top: "-15em",
        },
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
    },
}))

export const Login = () => {
    const { user } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const history = useHistory();

    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    if (user) {
        history.push("/home")
    }
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" className={classes.mainContainer}>
            <div className={classes.triangle}></div>
            <Grid item> <img className={classes.back} src={matchesXS ? avengersLogo : loginBackground} alt="" /></Grid>
            <Grid item direction="column" className={classes.title}>
                <Typography variant="h1" className={classes.h1}>MovieZone</Typography>
                <Typography style={{ marginLeft: matchesXS ? "3em" : matchesSM ? "8em" : "10em", marginTop: matchesXS ? "-1em" : "-1.5em" }} variant="body1" paragraph>A Place For Your Interest</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={loginWithRedirect} className={classes.loginButton}>Login/Signup</Button>
            </Grid>
        </Grid>
    )
}
