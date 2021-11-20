import { Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";

import logo from "../utilities/images/nav-logo.jpg"

const useStyles = makeStyles(theme => ({
    footerContainer: {
        height: "12em",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            height: "15em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "10em"
        }
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down("md")]: {
            height: "6em",
        },
        [theme.breakpoints.down('xs')]: {
            height: "4em"
        }
    },
    links: {
        marginTop: '1em'
    },
    copyright: {
        marginTop: '1rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        },
    },
    footerContent: {
        fontWeight: 300,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1em',
        }
    },
}))

export const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container
            className={classes.footerContainer}
            direction="column"
            alignItems='center'
        >
            <Grid item >
                <img src={logo} alt="LOGO" className={classes.logo} />
            </Grid>
            <Grid item container direction={matchesSM ? "column" : "row"} justifyContent='center' >
                <Typography
                    variant="body1"
                    style={{ color: "#1f70cc", marginRight: matchesSM ? 0 : "0.8em" }}
                    align='center'
                    className={classes.footerContent} paragraph
                >
                    Terms and Privacy Notice.
                </Typography>
                <Typography
                    variant="body1"
                    align='center'
                    className={classes.footerContent} paragraph
                >
                    &copy; 2021, MovieZone.com, Inc.
                </Typography>
            </Grid>
        </Grid>
    )
}