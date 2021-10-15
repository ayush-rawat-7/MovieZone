import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em"
    },
}))


export const Movies = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div className={classes.toolbarMargin}></div>
            Movies
        </>
    )
}
