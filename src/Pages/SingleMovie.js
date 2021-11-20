import { Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useStyles } from '../styles/singleMovieStyle'
import { useHistory } from 'react-router-dom'
import { useMovieContext } from '../context/movieContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'
export const SingleMovie = () => {
    let history = useHistory()
    const classes = useStyles()
    const { id } = useParams()
    const { getSingleMovie, single_movie, moviesLoading, moviesError } = useMovieContext()
    React.useEffect(() => {
        getSingleMovie(id)
        // eslint-disable-next-line
    }, [])
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const {
        poster_path,
        backdrop_path,
        original_title: title,
        tagline,
        release_date,
        runtime,
        genres,
        overview,
        original_language,
        status,
        vote_average,
        spoken_languages
    } = single_movie
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    let year = '';
    if (release_date) {
        year = release_date.toString().substring(0, 4)
    }
    let genre
    if (genres) {
        genre = genres.map(genre => genre.name + ', ')
        let final = genre[genre.length - 1].substring(0, genre[genre.length - 1].length - 2)
        genre.pop()
        genre.push(final)
    }
    let lang
    if (spoken_languages) {
        lang = spoken_languages.map(lang => lang.english_name + ', ')
        let final = lang[lang.length - 1].substring(0, lang[lang.length - 1].length - 2)
        lang.pop()
        lang.push(final)
    }

    const Wrapper = styled.div`
    position: relative;
    min-width: 98.9vw;
    background-color:#111;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background-image: url(${imgUrl + backdrop_path});
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
    }
  `
    const Wrapper1 = styled.div`
    position: relative;
    min-width: auto;
    background-color: #111;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      background-image: url(${imgUrl + poster_path});
      background-repeat: no-repeat;
      background-position: 50% 0;
      background-size: cover;
    }
  `
    const wrapperContent = (
        <Grid item container className={classes.dataContainer}>
            <Grid item container md={4} justifyContent={matchesSM ? "center" : undefined}>
                <Grid item className={classes.posterContainer} style={{ margin: matchesMD ? "0 2em" : '0 4em' }}>
                    <img src={imgUrl + poster_path} className={classes.poster} alt='Poster' />
                </Grid>
            </Grid>
            <Grid item container direction='column' md={8} style={{ color: '#f10606' }}>
                <Typography variant='h2' align={matchesSM ? "center" : undefined} className={classes.head}>
                    {title}({year}){' '}
                    <span style={
                        {
                            fontSize: matchesMD ? '2rem' : "2.5rem",
                            fontStyle: 'italic'
                        }
                    }>
                        ({original_language})
                    </span>
                    {' '} </Typography>
                <Typography variant='body1' align={matchesSM ? "center" : undefined} style={{ marginTop: '-1em' }} className={classes.text}>
                    {
                        status !== 'Released' ? 'Not Released' : status
                    }
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {genre}
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {
                        runtime === 0 ? 'Not Available' : runtime + 'min'
                    } </Typography>
                <div style={{ width: matchesXS ? "100px" : matchesMD ? "110px" : '140px', margin: matchesXS ? "2em auto" : matchesSM ? "1em auto" : '1em 0' }}>
                    <CircularProgressbar value={vote_average * 10} text={`${vote_average * 10}%`} styles={
                        buildStyles({ pathColor: `#25af47`, textColor: '#fff', trailColor: '#25af4745' })} />
                </div>
                <div className={classes.textContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant='h4' className={classes.movieDetailHead}>
                        Release Date:</Typography>
                    <Typography align={matchesSM ? "center" : undefined} className={classes.text} variant='body1'>
                        {release_date} </Typography>
                </div>
                {
                    spoken_languages ? (
                        <div className={classes.textContainer}>
                            <Typography align={matchesSM ? "center" : undefined}
                                variant='h4' className={classes.movieDetailHead}>Spoken Languages:</Typography>
                            <Typography align={matchesSM ? "center" : undefined}
                                className={classes.text}
                                variant='body1'>
                                {lang} </Typography>
                        </div>
                    ) : (undefined)
                }
                {
                    tagline ? (
                        <div className={classes.textContainer}>
                            <Typography align={matchesSM ? "center" : undefined}
                                variant='h4' className={classes.movieDetailHead}>Tagline:</Typography>
                            <Typography align={matchesSM ? "center" : undefined} className={classes.text} variant='body1'>
                                {tagline} </Typography>
                        </div>
                    ) : (undefined)
                }
                <div className={classes.textContainer}>
                    <Typography variant='h4' align={matchesSM ? "center" : undefined}
                        className={classes.movieDetailHead}>Overview:</Typography>
                    <Typography align={matchesSM ? "center" : undefined} className={classes.text} variant='body1'>
                        {overview} </Typography>
                </div>
                <Button variant='contained' className={classes.button} color='secondary' onClick={history.goBack}>
                    Back To Movies
                </Button>
            </Grid>
        </Grid>
    )
    return (
        <> {
            moviesLoading ? (
                <div className={
                    classes.loading
                }></div>
            ) : moviesError ? (
                <Grid item container direction='column' justifyContent='center'>
                    <Typography variant='h2' className={classes.errorContent}>
                        Something Went Wrong!
                    </Typography>
                    <Button variant='contained' className={classes.errorButton}
                        onClick={
                            () => window.location.reload()
                        }>
                        Try Again
                    </Button>
                </Grid>
            ) : (
                <>
                    <Header />
                    <div className={classes.toolbarMargin}></div>
                    <Grid container direction='row'
                        className={classes.mainContainer}>
                        {
                            backdrop_path === null ?
                                <Wrapper1>
                                    {wrapperContent}
                                </Wrapper1>
                                :
                                <Wrapper item container>
                                    {wrapperContent}
                                </Wrapper>
                        }
                    </Grid>
                    <Footer />
                </>
            )
        } </>
    )
}
