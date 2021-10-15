import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down('md')]:{
            marginBottom:"2em"
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom: "0.9em"
        },
    },
}))


export const Home = (props) => {
    const classes = useStyles();

    return (
        <>
            <Header props={props} />
            <div className={classes.toolbarMargin}></div>
            Home
        </>
    )
}
