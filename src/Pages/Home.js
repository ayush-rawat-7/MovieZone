import { Button, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import emailjs from "emailjs-com"
import { init } from 'emailjs-com';

import homeImg from "../utilities/images/homePage.jpg"
import search from "../utilities/images/search-flat.png"
import findImg from "../utilities/images/find-img.jpeg"
import movieImg from "../utilities/images/movie-background.jfif"

init(process.env.REACT_APP_EMAIL_JS);

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "0.9em"
        },
    },
    homeImg: {
        width: "500px",
        [theme.breakpoints.down('md')]: {
            width: "400px"
        },
        [theme.breakpoints.down('xs')]: {
            width: '250px'
        }
    },
    searchImg: {
        width: "400px",
        [theme.breakpoints.down('md')]: {
            width: '300px'
        },
        [theme.breakpoints.down('xs')]: {
            width: "200px"
        }
    },
    findImg: {
        width: "460px",
        // height: "420px",
        [theme.breakpoints.down('md')]: {
            width: '340px',

        },
        [theme.breakpoints.down('xs')]: {
            width: '200px'
        }
    },
    rowContainer: {
        paddingTop: "5em",
        paddingBottom: "5em",
        backgroundColor: theme.palette.primary.main
    },
    backgroundColor: {
        backgroundColor: "#C6C6C6",
        paddingTop: "0.8em",
        paddingBottom: "0.8em"
    },
    filmHouse: {
        width: "18em",
        height: "35px",
        backgroundColor: "#0F3460",
        color: "#fff",
        borderRadius: "5px",
        margin: "0 1em",
        [theme.breakpoints.down('sm')]: {
            marginTop: "0.5em",
            marginBottom: "0.5em",
        },
    },
    underline: {
        width: "50vw",
        margin: "auto",
        height: '2px',
        background: '#000',
        marginBottom: '0.9em',
    },
    choiceHead: {
        color: "#fff",
        marginTop: "0.9em",
    },
    choiceUnderline: {
        width: "50vw",
        margin: "auto",
        height: '1px',
        background: '#C0F0FF',
        marginBottom: '0.9em',
        marginTop: "1.5em"
    },
    card: {
        position: 'relative',
    },
    cardContainer: {
        width: "60em",
        marginTop: "8em",
        marginBottom: "8em",
        [theme.breakpoints.down('md')]: {
            marginLeft: "1.5em",
            marginRight: "1.5em",
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "5em",
            marginBottom: "5em",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "3em",
            marginBottom: "3em",
        }
    },
    cardMedia: {
        height: 400,
        maxWidth: 800,
        width: 500,
        maxHeight: 600,
        display: 'block',
        margin: "auto",
        borderRadius: "50px",
        objectFit: "fill",
        [theme.breakpoints.down('md')]: {
            width: 500,
        },
        [theme.breakpoints.down('xs')]: {
            width: 250,
            height: 200
        }

    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    typo: {
        color: "#fff",
        fontSize: "3.2em",
        marginTop: "0.5em"
    },
    emailContainer: {
        width: "45vw",
        margin: "auto",
        height: "72px",
        maxWidth: "100em",
        borderRadius: 25,
        backgroundColor: "#DEEBFF",
        border: "none",
        paddingLeft: "1em",
        paddingRight: "1em",
        fontSize: "1.8rem",
        fontWeight: "bold",
        marginTop: "1em",
        marginBottom: "1em",
        [theme.breakpoints.down('sm')]: {
            width: "50vw",
            height: "65px",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
            fontSize: "1.4em",
            marginTop: "1.5em"
        },
        [theme.breakpoints.down('xs')]: {
            width: "60vw",
            fontSize: "1.1em",
            height: "40px"
        }
    },
    textarea: {
        width: "64.5vw",
        padding: "0.5em",
        height: "500px",
        margin: "auto",
        maxWidth: "100em",
        fontSize: "1.8rem",
        backgroundColor: "#DCF7FF",
        border: "none",
        borderRadius: 25,
        [theme.breakpoints.down('sm')]: {
            height: "300px",
            width: "70vw"
        },
        [theme.breakpoints.down('xs')]: {
            height: "180px",
            width: "80vw"
        }
    },
    submit: {
        width: "24vw",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "2em",
        border: 'none',
        backgroundColor: "#183F63",
        color: "#fff",
        borderRadius: 25,
        height: "2.6em",
        fontSize: "1.5em",
        textTransform: "none",
        maxWidth: "20em",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        },
        minWidth: "200px"
    },
}))


export const Home = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { user } = useAuth0();
    const [email, setEmail] = React.useState(user.email ? user.email : "");
    const [message, setMessage] = React.useState("");
    // const matchesMD = useTheme(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const form = React.useRef()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(message === ""){
            window.alert("Please Write message before sending the feedback");
            return
        }
        emailjs.send("service_zpj6uqf", "template_iwtt6mn", {
            from_name: email,
            message: message,
        });
        window.alert("Thank You, Your response has been submitted.")
        setMessage('')
    }

    return (
        <>
            <Header props={props} />
            <div className={classes.toolbarMargin}></div>
            <Grid
                item
                container
                direction='column'
                className={classes.mainContainer}
            >
                {/* top part */}
                <Grid
                    item
                    container
                    className={classes.rowContainer}
                    justifyContent="center"
                >
                    <Grid
                        item
                        container
                        direction="column"
                        justifyContent="center"
                        md style={{ width: '60em', maxWidth: "90em" }}
                    >
                        <Grid
                            item
                            style={{
                                margin: matchesSM ? undefined : "auto",
                                textAlign: matchesSM ? "center" : undefined
                            }}
                        >
                            {
                                matchesSM ?
                                    <Typography variant="h3"
                                        style={{ fontSize: matchesXS ? "2em" : undefined }}
                                    >Find Movies, TV Shows <br /> At One Place. </Typography>
                                    :
                                    <div>
                                        <Typography variant="h3">Find...</Typography>
                                        <Typography variant="h3">Movies</Typography>
                                        <Typography variant="h3">TV Shows</Typography>
                                        <Typography variant="h3">At One Place</Typography>
                                    </div>

                            }

                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent='center'
                        md
                        style={{
                            width: '60em',
                            maxWidth: "90em"
                        }}
                    >
                        <img src={homeImg} alt="Logo" className={classes.homeImg} />
                    </Grid>
                </Grid>
                {/* top part end */}

                {/* second part start */}
                <Grid
                    item
                    container
                    style={{ backgroundColor: "#fff" }}
                    className={classes.container}
                >
                    {/* film houses start */}
                    <Grid
                        item
                        container
                        justifyContent="space-around"
                        className={classes.backgroundColor}
                    >
                        <Grid item className={classes.filmHouse} md>
                            <Typography align='center' variant="h5">
                                Fox Pictures
                            </Typography>
                        </Grid>
                        <Grid item className={classes.filmHouse} md>
                            <Typography align='center' variant="h5">
                                Universal studios
                            </Typography>
                        </Grid>
                        <Grid item className={classes.filmHouse} md>
                            <Typography align='center' variant="h5">
                                Sony Pictures
                            </Typography>
                        </Grid>
                        <Grid item className={classes.filmHouse} md>
                            <Typography align='center' variant="h5">
                                Disney
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* film houses end */}

                    <Grid
                        item
                        container
                        direction='column'
                        className={classes.container}
                    >
                        <Grid item direction="column">
                            <Typography
                                style={{
                                    marginTop: "1em",
                                    marginBottom: "0.4em",
                                    fontSize: matchesSM ? "2.5em" : undefined
                                }}
                                align="center"
                                variant="h2"

                            >
                                What to do?
                            </Typography>
                            <div className={classes.underline} />
                        </Grid>

                        <Grid
                            item
                            container
                            justifyContent='center'
                            style={{ marginTop: matchesXS ? "2em" : "6em" }}
                        >
                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="center"
                                md
                                style={{ width: '60em', maxWidth: "90em" }}
                            >
                                <Typography
                                    style={{
                                        margin: "auto",
                                        fontSize: matchesSM ? "2em" : undefined
                                    }}
                                    variant="h4"
                                    align={matchesSM ? "center" : undefined}
                                >
                                    Search For Any Movie Or <br />
                                    Tv Show You Like.
                                </Typography>
                            </Grid>
                            <Grid
                                item container
                                justifyContent='center'
                                style={{ width: '60em', maxWidth: "90em" }}
                                md
                            >
                                <img
                                    src={search}
                                    alt="Logo"
                                    className={classes.searchImg}
                                    style={{ marginTop: matchesSM ? "2em" : undefined }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            justifyContent='center'
                            style={{ marginTop: "8em", marginBottom: "8em" }}
                        >
                            <Grid item container justifyContent='center' style={{ width: '60em', maxWidth: "90em" }} md  >
                                <img
                                    src={findImg}
                                    alt="Logo"
                                    className={classes.findImg}
                                    style={{ marginBottom: matchesSM ? "1em" : undefined }}
                                />
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                justifyContent="center"
                                md
                                style={{ width: '60em', maxWidth: "90em" }}
                            >
                                <Typography
                                    style={{
                                        margin: "auto",
                                        fontSize: matchesSM ? "2em" : undefined
                                    }}
                                    variant="h4"
                                    align={matchesSM ? "center" : undefined}
                                >
                                    Find the Movie or Show <br />
                                    and Enjoy
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* second part end */}

                {/* third part start */}
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.container}
                    style={{ backgroundColor: "#0F3460" }}
                >
                    <Grid item direction="column">
                        <Typography
                            align="center"
                            variant="h2"
                            className={classes.choiceHead}
                            style={{
                                marginTop: "1em",
                                marginBottom: "0.4em",
                                fontSize: matchesSM ? "2.7em" : undefined,
                                marginLeft: matchesSM ? "0.2em" : undefined,
                                marginRight: matchesSM ? "0.2em" : undefined,
                            }}
                        >
                            Ready to find your choice?
                        </Typography>
                        <div className={classes.choiceUnderline} />
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="center"
                    >
                        <Grid item className={classes.cardContainer} md>
                            <div className={classes.card}>
                                <img className={classes.cardMedia} src={movieImg} alt="" />
                            </div>
                            <Link
                                to="/movies"
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="h2"
                                    align='center'
                                    style={{
                                        top: "3.8em",
                                        left: "5.5em",
                                        fontSize: matchesSM ? "2.5em" : undefined
                                    }}
                                    className={classes.typo}
                                >
                                    Movies
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item className={classes.cardContainer} md>
                            <div className={classes.card}>
                                <img className={classes.cardMedia} src={homeImg} alt="" />
                            </div>
                            <Link
                                to="/shows"
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography
                                    variant="h2"
                                    align='center'
                                    style={{
                                        top: "3.8em",
                                        left: "4.59em",
                                        fontSize: matchesSM ? "2.5em" : undefined
                                    }}
                                    className={classes.typo}
                                >
                                    TV Shows
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                {/* third part end */}

                {/* feedback part start */}
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.container}
                >
                    <Grid item >
                        <Typography
                            variant="h2"
                            className={classes.choiceHead}
                            style={{
                                color: "#000",
                                fontSize: matchesSM ? "2.7em" : undefined
                            }}
                            align="center"
                        >
                            Feedback
                        </Typography>
                        {/* <div className={classes.underline}></div> */}
                    </Grid>
                    <Grid item>
                        <form
                            ref={form}
                            className={classes.form}
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                name="from_name"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={classes.emailContainer}
                            />
                            <textarea name="message"
                                id="message"
                                cols="30"
                                className={classes.textarea}
                                rows="20"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                style={{
                                    textAlign: message ? undefined : 'center'
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.submit}
                                onClick={handleSubmit}
                            >
                                Submit</Button>
                        </form>
                    </Grid>
                </Grid>
                {/* feedback part end */}
            </Grid>
            <Footer />
        </>
    )
}
