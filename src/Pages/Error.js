import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

import error from "../utilities/images/error.jpg"
const useStyles = makeStyles(theme => ({
    mainContainer: {
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    title: {
        color: "#ffffff",
        zIndex: 2000
    },
    backHome: {
        width: "20em",
        height: "3.3em",
        fontSize: "1.1rem",
        marginTop: "2em",
        border: "none",
        color: "#fff",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    backImg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0.7"
    },
}))

export const Error = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            className={classes.mainContainer}
        >
            <img src={error} className={classes.backImg} alt="Joker" />
            <Typography variant="h2" className={classes.title}>
                OOPS!  Web Page Not Found
            </Typography>
            <Button component={NavLink} to="/" className={classes.backHome} variant="contained" >Back To Home</Button>
        </Grid>
    )
}
