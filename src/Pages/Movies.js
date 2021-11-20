import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { GET_SEARCH_QUERY } from "../actions"
import { useMovieContext } from "../context/movieContext"
import { useStyles } from "../styles/movieStyles"
import movieImg from "../utilities/images/guardian.jpg"
import altPoster from "../utilities/images/altPoster.png"
import { NavLink } from 'react-router-dom';

export const Movies = () => {
    const classes = useStyles();
    const {
        popularMovies,
        query,
        getSearchedMovies,
        dispatch,
        moviesLoading,
        moviesError,
        searchedMovies
    } = useMovieContext()
    const img_url = "https://image.tmdb.org/t/p/w500";
    React.useEffect(() => {
        getSearchedMovies(query);
        // eslint-disable-next-line
    }, [query])

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
                            <Typography variant="h1" className={classes.movieHead}>Find Your Movie!</Typography>
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
                    moviesLoading ?
                        <div className={classes.loading}></div>
                        :
                        moviesError ?
                            <Grid item container direction="column" justifyContent="center">
                                <Typography variant="h2" className={classes.errorContent}>Something Went Wrong!</Typography>
                                <Button
                                    variant="contained"
                                    className={classes.errorButton}
                                    onClick={() => window.location.reload()}
                                >Try Again</Button>
                            </Grid>
                            :
                            <Grid item container justifyContent='center' style={{ margin: "1em 0em 5em 0em" }} >
                                {
                                    searchedMovies && query ?
                                        searchedMovies.length === 0 ?
                                            <Grid item container direction="column" justifyContent="center">
                                                <Typography variant="h2" className={classes.errorContent}>No Movies Found!</Typography>
                                            </Grid>
                                            :
                                            searchedMovies.map((data, idx) => {
                                                if (data.poster_path === null) {
                                                    return <NavLink key={idx} to={`/movies/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                        <div className={classes.cardContainer}  >
                                                            <img src={altPoster} className={classes.movieImg} alt="poster" />
                                                            <div className={classes.titleContainer}>
                                                                <h3 style={{ fontWeight: "500" }}>{data.title}</h3>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                } else {
                                                    return <NavLink key={idx} to={`/movies/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                        <div className={classes.cardContainer} >
                                                            <img src={img_url + data.poster_path} className={classes.movieImg} alt="poster" />
                                                            <div className={classes.titleContainer}>
                                                                <h3 style={{ fontWeight: "500" }}>{data.title}</h3>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                }

                                            })
                                        :
                                        popularMovies.map((data, idx) => {
                                            return <NavLink key={idx} to={`/movies/${data.id}`} className={classes.cardLink} style={{ margin: "15px 25px" }}>
                                                <div className={classes.cardContainer} >
                                                    <img src={img_url + data.poster_path} className={classes.movieImg} alt="poster" />
                                                    <div className={classes.titleContainer}>
                                                        <h3 style={{ fontWeight: "500" }}>{data.title}</h3>
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
