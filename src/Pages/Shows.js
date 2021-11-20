import { Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { GET_SEARCH_QUERY } from "../actions"
import { useShowsContext } from "../context/showsContext"
import { useStyles } from "../styles/movieStyles"
import movieImg from "../utilities/images/deadpool.jpg"
import altPoster from "../utilities/images/altPoster.png"
import { NavLink } from 'react-router-dom';

export const Shows = () => {
    const classes = useStyles();
    const theme = useTheme();
    const {
        popularShows,
        query,
        getSearchedShows,
        dispatch,
        showsLoading,
        showsError,
        searchedShows
    } = useShowsContext()
    const img_url = "https://image.tmdb.org/t/p/w500";
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    React.useEffect(() => {
        getSearchedShows(query);
        // eslint-disable-next-line
    }, [query]);
    
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
                                onChange={e => dispatch({ type: GET_SEARCH_QUERY, payload: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/* movies section */}
                {
                    showsLoading ?
                        <div className={classes.loading}></div>
                        :
                        showsError ?
                            <Grid item container direction="column" justifyContent="center">
                                <Typography variant="h2" className={classes.errorContent}>Something Went Wrong!</Typography>
                                <Button
                                    variant="contained"
                                    className={classes.errorButton}
                                    onClick={() => window.location.reload()}
                                >Try Again</Button>
                            </Grid>
                            :
                            <Grid item container justifyContent='center' style={{ margin: matchesXS ? "0.5em auto 1em auto" : "1em auto 5em auto" }} >
                                {
                                    searchedShows && query ?
                                        searchedShows.length === 0 ?
                                            <Grid item container direction="column" justifyContent="center">
                                                <Typography variant="h2" className={classes.errorContent}>No Shows Found!</Typography>
                                            </Grid>
                                            :
                                            searchedShows.map((data, idx) => {
                                                if (data.poster_path === null) {
                                                    return <NavLink key={idx} to={`/shows/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                        <div className={classes.cardContainer} >
                                                            <img src={altPoster} className={classes.movieImg} alt="poster" />
                                                            <div className={classes.titleContainer}>
                                                                <h3 style={{ fontWeight: "500" }}>{data.name}</h3>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                } else {
                                                    return <NavLink key={idx} to={`/shows/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                        <div className={classes.cardContainer} >
                                                            <img src={img_url + data.poster_path} className={classes.movieImg} alt="poster" />
                                                            <div className={classes.titleContainer}>
                                                                <h3 style={{ fontWeight: "500" }}>{data.name}</h3>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                }

                                            })
                                        :
                                        popularShows.map((data, idx) => {
                                            return <NavLink key={idx} to={`/shows/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                <div className={classes.cardContainer} >
                                                    <img src={img_url + data.poster_path} className={classes.movieImg} alt="poster" />
                                                    <div className={classes.titleContainer}>
                                                        <h3 style={{ fontWeight: "500" }}>{data.name}</h3>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        })
                                }
                            </Grid>
                }
            </Grid>
            <Footer />
        </>
    )
}
