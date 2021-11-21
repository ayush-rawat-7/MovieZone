import { Button, Grid, Snackbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useStyles } from "../styles/homeStyles"

import homeImg from "../utilities/images/homePage.jpg"
import search from "../utilities/images/search-flat.png"
import findImg from "../utilities/images/find-img.jpeg"
import movieImg from "../utilities/images/xmen.jpeg"
import showImg from "../utilities/images/the100.jpg"
import axios from 'axios';
export const Home = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { user } = useAuth0();
    const [email, setEmail] = React.useState(user.email ? user.email : "");
    const [message, setMessage] = React.useState("");
    const [alert, setAlert] = React.useState({ open: false, message: "", backgroundColor: "" });

    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message === "") {
            window.alert("Please Write message before sending the feedback");
            return
        }
        const encodedEmail = encodeURIComponent(email)
        const encodedMessage = encodeURIComponent(message)
        axios
            .get(`/.netlify/functions/emailHandler?email=${encodedEmail}&message=${encodedMessage}`
            )
            .then(res => {
                setMessage("");
                setAlert({
                    open: true,
                    message: "Message Sent Successfully",
                    backgroundColor: "#4bb543"
                });
            })
            .catch(err => {
                setAlert({
                    open: true,
                    message: "Something Went Wrong, Please Try Again",
                    backgroundColor: "#ff3232"
                })
            });
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
                    {
                        matchesXS ? undefined :
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
                    }

                    {/* film houses end */}

                    <Grid
                        item
                        container
                        direction='column'
                        className={classes.container}
                    >
                        <Grid item container direction="column">
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
                    <Grid item container direction="column">
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
                        <Grid item container className={classes.cardContainer} md>
                            <Grid item style={{ margin: "auto", position: "relative" }}>
                                <Link
                                    to="/movies"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className={classes.card}>
                                        <img className={classes.cardMedia} src={movieImg} alt="" />
                                    </div>
                                    <Typography
                                        variant="h2"
                                        align='center'
                                        className={classes.moviesTypo}
                                    >
                                        Movies
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item container className={classes.cardContainer} md >
                            <Grid item style={{ margin: "auto", position: "relative" }}>
                                <Link
                                    to="/shows"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <div className={classes.card}>
                                        <img className={classes.cardMedia} src={showImg} alt="" />
                                    </div>
                                    <Typography
                                        variant="h2"
                                        align='center'
                                        className={classes.showsTypo}
                                    >
                                        TV Shows
                                    </Typography>
                                </Link>
                            </Grid>
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
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                disabled
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
                <Snackbar
                    open={alert.open}
                    message={alert.message}
                    ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                    anchorOrigin={{ vertical: "top", horizontal: "center", textAlign: "center" }}
                    onClose={() => setAlert({ ...alert, open: false })}
                    autoHideDuration={3000}
                />
            </Grid>
            <Footer />
        </>
    )
}
