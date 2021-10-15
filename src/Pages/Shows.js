import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"
import { Login } from "../Pages/Login"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
}))


export const Shows = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const classes = useStyles();

    return (
        <div>
            <Header />
            <div className={classes.toolbarMargin}></div>
            Shows
        </div>

    )
}
