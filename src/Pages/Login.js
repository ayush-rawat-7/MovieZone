import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { useAuth0 } from '@auth0/auth0-react'
import { useStyles } from '../styles/loginStyles'
import loginBackground from "../utilities/images/avengers.jpg"
import avengersLogo from "../utilities/images/avengersLogo.png"
import { useHistory } from 'react-router'

export const Login = () => {
    const { user } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const history = useHistory();

    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    if (user) {
        history.push("/home");
    }
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.mainContainer}>
            <div className={classes.triangle}></div>
            <Grid item> <img className={classes.back} src={matchesXS ? avengersLogo : loginBackground} alt="" /></Grid>
            <Grid item className={classes.title}>
                <Typography variant="h1" className={classes.h1}>MovieZone</Typography>
                <Typography style={{ marginLeft: matchesXS ? "3em" : matchesSM ? "8em" : "10em", marginTop: matchesXS ? "-1em" : "-1.5em" }} variant="body1" paragraph>A Place For Your Interest</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={loginWithRedirect} className={classes.loginButton}>Login/Signup</Button>
            </Grid>
        </Grid>
    )
}
