import { AppBar, Box, Button, Grid, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useStyles } from '../styles/singleMovieStyle'
import { useHistory } from 'react-router-dom'
import { useShowsContext } from '../context/showsContext'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import PropTypes from "prop-types"
import Switch from '@material-ui/core/Switch';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

export const SingleShows = () => {
    let history = useHistory()
    const [value, setValue] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    const classes = useStyles()
    const { id } = useParams()
    const { getSingleShow, single_show, showsLoading, showsError } = useShowsContext()
    React.useEffect(() => {
        getSingleShow(id)
        // eslint-disable-next-line
    }, [id]);
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const {
        poster_path,
        backdrop_path,
        original_name: title,
        tagline,
        first_air_date: release_date,
        episode_run_time: runtime,
        genres = [],
        number_of_episodes: episodes,
        number_of_seasons: seasonsCount,
        overview,
        original_language,
        status,
        vote_average,
        spoken_languages,
        seasons
    } = single_show
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    let year = '';
    if (release_date) {
        year = release_date.toString().substring(0, 4)
    }
    let genre
    if (genres.length !== 0) {
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
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div role="tabpanel" hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box style={{ backgroundColor: theme.palette.primary.main }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };
    function a11yProps(index) {
        return {
            id: `scrollable-auto-tab-${index}`,
            'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
            <Grid item container direction='column' md={8} style={{ color: '#f10606', paddingRight: matchesSM ? 0 : "10px" }}>
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
                        status !== 'Ended' ? 'On Going' : status
                    }
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {genre ? genre : "Genre Not Available"}
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {
                        runtime === 0 ? 'Not Available' : runtime + 'min'
                    }
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {
                        episodes + ' Episodes'
                    }
                    <span style={{ fontWeight: '700', fontSize: '2em' }}> . </span>
                    {
                        seasonsCount + ' Seasons'
                    }
                </Typography>
                <div style={{
                    width: matchesXS ? "100px" : matchesMD ? "110px" : '140px', margin: matchesXS ? "2em auto" : matchesSM ? "1em auto" : '1em 0'
                }}>
                    <CircularProgressbar value={vote_average * 10} text={`${vote_average * 10}%`} styles={
                        buildStyles({ pathColor: `#25af47`, textColor: '#fff', trailColor: '#25af4745' })
                    } />
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
                            <Typography align={matchesSM ? "center" : undefined} variant='h4' className={classes.movieDetailHead}>
                                Spoken Languages:</Typography>
                            <Typography align={matchesSM ? "center" : undefined} className={classes.text} variant='body1'>
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
                <Grid item container justifyContent={matchesSM ? "center" : undefined} alignItems="flex-end">
                    <Typography variant='h4' style={{ marginTop: "0.7em", fontSize: matchesMD ? "1.9rem" : undefined }} align={matchesSM ? "center" : undefined}>Seasons: </Typography>
                    <Switch checked={checked} onChange={toggleChecked} />
                </Grid>
                {/* seasons */}
                {checked ?
                    seasons !== undefined ?
                        <>
                            <div className={classes.root}>
                                <AppBar position="relative" color="primary">
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        indicatorColor="secondary"
                                        textColor="#fff"
                                        variant="scrollable"
                                        scrollButtons="auto"
                                    >
                                        {
                                            seasons.map((season, index) => {
                                                return <Tab label={season.name} {...a11yProps(index - 1)} />
                                            })
                                        }
                                    </Tabs>
                                </AppBar>
                                {
                                    seasons.map((season, idx) => {
                                        const { air_date, episode_count, name, overview, poster_path } = season
                                        return <TabPanel value={value} index={idx}>
                                            <div className={classes.seasonContainer}>
                                                <div style={{ height: '100%' }}>
                                                    <img className={classes.seasonImg} src={imgUrl + poster_path} alt="" />
                                                </div>
                                                <div className={classes.seasonData}>
                                                    <Typography variant="h4" className={classes.seasonsHead} style={{ fontStyle: "italic" }}>{name}</Typography>
                                                    <Typography variant="body1" className={classes.seasonContent} >Air Date: {air_date}</Typography>
                                                    <Typography variant="body1" className={classes.seasonContent} >Episodes: {episode_count}</Typography>
                                                    <Typography variant="body1" className={classes.seasonContent} style={{ marginBottom: "1em" }}>Overview: {overview || "Not Available"}</Typography>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    })
                                }
                            </div>
                        </>
                        : undefined : undefined
                }
                {/* seasons end*/}
                <Button variant='contained' className={classes.button} color='secondary' onClick={history.goBack}>
                    Back To Movies
                </Button>
            </Grid>
        </Grid>
    )
    return (
        <> {
            showsLoading ? (
                <div className={classes.loading}></div>
            ) : showsError ? (
                <Grid item container direction='column' justifyContent='center'>
                    <Typography variant='h2' className={classes.errorContent}>
                        Something Went Wrong!
                    </Typography>
                    <Button variant='contained' className={classes.errorButton} onClick={() => window.location.reload()}>
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
