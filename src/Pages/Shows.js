import { Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { data } from "../components/dummyData"

import movieImg from "../utilities/images/guardian.jpg"

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2em"
    },
    rowContainer: {
        backgroundColor: theme.palette.primary.main,
        height: "80vh",
        marginBottom: "1em"
    },
    backgroundContainer: {
        height: "100%",
        width: "100%",
    },
    searchContainer: {
        position: "absolute",
        marginTop: "10em",
    },
    searchBackground: {
        width: "100%",
        height: "100%",
        objectFit: "fit",
        opacity: "0.3",
    },
    movieHead: {
        fontWeight: "800",
        color: theme.palette.secondary.dark,
    },
    searchInput: {
        display: "block",
        width: "50%",
        height: "2.5em",
        border: "none",
        margin: "1em auto",
        borderRadius: "30px",
        padding: "1px 20px 0px 20px",
        outline: "none",
        color: theme.palette.primary.light,
        fontSize: "1.8rem",
        "&::placeholder": {
            color: theme.palette.primary.light,
            fontSize: "1.8rem",
        }
    },
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "22em",
        margin: "1em 1em 0em 1em",
        borderRadius: "15px",
        backgroundImage:"linear-gradient(#fff, #111)",
        boxShadow: "0px 0px 5px #111 , 0px 0px 5px 1px #111 inset",
        "&:hover":{
            backgroundImage:"linear-gradient(#ffffff, #16213E)",
            cursor:"pointer"
        }
    },
    movieImg: {
        width: "100%",
        height: "100%",
        display: "block",
        margin: "0px auto",
        borderRadius: "15px 15px 0 0",
    },
    titleContainer: {
        width: "90%",
        margin: "auto",
        textAlign: "center",
        color: "white"
    }
}))


export const Shows = () => {
    const classes = useStyles();
    // search Query
    const [query, setQuery] = useState("");
    const dummy = data[0].results;
    const img_url = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <Header />
            <div className={classes.toolbarMargin}></div>
            <Grid
                container
                direction="column"
                className={classes.mainContainer}
            >
                <Grid item
                    container
                    className={classes.rowContainer}
                >
                    <Grid item className={classes.backgroundContainer}>
                        <img src={movieImg} className={classes.searchBackground} alt="Guardians of the galaxy background" />
                    </Grid>
                    <Grid item container direction="column" alignItems="center" className={classes.searchContainer} >
                        <Grid item>
                            <Typography variant="h1" className={classes.movieHead}>Find Your Show!</Typography>
                        </Grid>
                        <Grid item style={{ width: "100%" }}>
                            <input
                                type="text"
                                placeholder="Search Here"
                                className={classes.searchInput}
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* movies section */}
                <Grid item container justifyContent='center' style={{margin:"1em auto 5em auto"}} >
                    {dummy.map(data => {
                        return <div className={classes.cardContainer}>
                            <img src={img_url + data.poster_path} className={classes.movieImg} alt="poster" />
                            <div className={classes.titleContainer}>
                                <h3 style={{ fontWeight: "500" }}>{data.title}</h3>
                            </div>
                        </div>
                    })}
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}
