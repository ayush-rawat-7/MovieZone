import { useAuth0 } from '@auth0/auth0-react'
import { AppBar, Button, Hidden, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Tab, Tabs, Toolbar, useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from "@material-ui/icons/Menu"
import logo from "../utilities/images/nav-logo.jpg"
import { useMovieContext } from "../context/movieContext";
import { useShowsContext } from '../context/showsContext'

function ElevationScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    })

    return React.cloneElement(children, {
        elevation: trigger ? 0 : 0
    })
}

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1,
        [theme.breakpoints.down('xs')]: {
            zIndex: 1
        },
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "-2em"
        },
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    logo: {
        height: "8em",
        marginLeft: '1em',
        [theme.breakpoints.down("md")]: {
            height: "7em",
            marginLeft: '0em'
        },
        [theme.breakpoints.down('xs')]: {
            height: "4em"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: '70px',
    },
    button: {
        width: "8em",
        height: "45px",
        marginLeft: "50px",
        marginRight: "25px",
        color: "whitesmoke",
        fontSize: "1rem",
        textTransform: "none",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        color: "#ffeded",
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "5px",
        [theme.breakpoints.down('xs')]: {
            height: "40px",
            width: "40px"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerLogo: {
        width: "250px",
        [theme.breakpoints.down('xs')]: {
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    drawerButton: {
        width: "20em",
        marginTop: "2em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "10em"
        }
    },
    drawerItems: {
        backgroundColor: theme.palette.primary.main,
        width: "20em",
        minHeight: "100vh",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    drawerText: {
        ...theme.typography.tab,
        opacity: "0.7",
    },
    drawerTextSelected: {
        opacity: 1
    },
}))

export const Header = () => {
    const { single_movie } = useMovieContext();
    const { single_show } = useShowsContext();
    const { id } = single_movie;
    const { id: idx } = single_show;
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const { logout } = useAuth0();
    const [value, setValue] = React.useState(0);

    const handleChange = (e, value) => {
        setValue(value)
    }

    React.useEffect(() => {
        if (window.location.pathname === "/home" && value !== 0) {
            setValue(0);
        }
        else if (window.location.pathname === "/movies" && value !== 1) {
            setValue(1);
        }
        else if (window.location.pathname === `/movies/${id}` && value !== 1) {
            setValue(1);
        }
        if (window.location.pathname === "/shows" && value !== 2) {
            setValue(2);
        }
        if (window.location.pathname === `/shows/${id}` && value !== 2) {
            setValue(2);
        }
    }, [value, id, idx])

    const tabs = (
        <>
            <Tabs
                indicatorColor="primary"
                value={value}
                onChange={handleChange}
                className={classes.tabContainer}
            >
                <Tab
                    className={classes.tab}
                    label="Home"
                    component={Link}
                    to="/home"
                />
                <Tab
                    className={classes.tab}
                    label="Movies"
                    component={Link}
                    to="/movies"
                />
                <Tab
                    className={classes.tab}
                    label="TV Shows"
                    component={Link}
                    to="/shows"
                />
            </Tabs>
            <Button
                variant="contained"
                className={classes.button}
                color="secondary"
                onClick={() => logout({ returnTo: window.location.origin })}
            >
                Logout
            </Button>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawerItems }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    <Hidden smUp >
                        <ListItem onClick={() => setOpenDrawer(false)} component={Link} to="/">
                            <img src={logo} alt="MovieZone Logo" className={classes.drawerLogo} />
                        </ListItem>
                    </Hidden>
                    <ListItem onClick={() => setOpenDrawer(false)}
                        button
                        component={Link}
                        to="/"
                        selected={value === 0}
                        style={{ marginTop: matchesXS ? '2em' : 0 }}
                    >
                        <ListItemText
                            align={matchesXS ? "center" : undefined}
                            className={value === 0 ? [classes.drawerText, classes.drawerTextSelected] : classes.drawerText} >
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={Link}
                        to="/movies"
                        selected={value === 1}
                    >
                        <ListItemText
                            align={matchesXS ? "center" : undefined}
                            className={value === 1 ? [classes.drawerText, classes.drawerTextSelected] : classes.drawerText} >
                            Movies
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => setOpenDrawer(false)}
                        button
                        component={Link}
                        to="/shows"
                        selected={value === 2}
                    >
                        <ListItemText
                            align={matchesXS ? "center" : undefined}
                            className={value === 2 ? [classes.drawerText, classes.drawerTextSelected] : classes.drawerText}>
                            TV Shows
                        </ListItemText>
                    </ListItem>
                    <ListItem >
                        <Button variant="contained"
                            className={[classes.button, classes.drawerButton]}
                            color="secondary"
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            Logout
                        </Button>
                    </ListItem>
                </List>

            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                className={classes.drawerIconContainer}
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )
    return (
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar disableGutters>
                    <Button component={Link} to="/home" className={classes.logoContainer} disableRipple>
                        <img src={logo} alt="MovieZone Logo" className={classes.logo} />
                    </Button>
                    {matchesMD ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}