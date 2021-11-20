import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from '../styles/errorStyles'

import error from "../utilities/images/error.jpg"

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
