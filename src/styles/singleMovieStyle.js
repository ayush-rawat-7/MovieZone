const { makeStyles } = require("@material-ui/core");
export const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "0.3em"
        },
    },
    mainContainer: {
        height: "100%",
    },
    loading: {
        width: " 6rem",
        height: " 6rem",
        margin: "1em auto",
        borderRadius: " 50%",
        border: "3px solid #ccc",
        borderTopColor: "var(--clr-primary-5)",
        animation: " spinner 0.6s linear infinite",
    },
    "@keyframes spinner": {
        "to": {
            transform: "rotate(360deg)"
        }
    },
    root: {
        flexGrow: 1,
        width: '97%',
        marginTop: "1em",
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('sm')]: {
            margin: " 1em auto",
            width: '90%',
            height: "auto"
        }
    },
    button: {
        width: "11em",
        zIndex: 1,
        height: "45px",
        marginTop: "2em",
        marginBottom: "2em",
        color: "whitesmoke",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down('sm')]: {
            margin: "2em auto"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "0.8rem",
        }
    },
    head: {
        fontSize: '3rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8rem',
            margin: "0 0.06em"
        },
    },

    posterContainer: {
        width: '30em',
        [theme.breakpoints.down('sm')]: {
            width: "25em",
        },
        [theme.breakpoints.down('xs')]: {
            width: '16em'
        }
    },
    text: {
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            fontSize: "1.3rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem",
            margin: "0 0.2em"
        },

    },
    movieDetailHead: {
        [theme.breakpoints.down('md')]: {
            fontSize: "1.9rem"
        }
    },
    poster: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: "30em",
            marginBottom: "2em"
        },
        [theme.breakpoints.down('xs')]: {
            height: "25em",
            marginBottom: "2em"
        }
    },
    seasonsHead: {
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.5rem"
        }
    },
    seasonContent: {
        marginTop: "1em",
        [theme.breakpoints.down('xs')]: {
            marginTop: "0.5em",
            fontSize:"1.2rem"
        }
    },
    dataContainer: {
        position: 'relative',
        marginTop: "7em",
        marginBottom: "7em",
        width: "100%",
        [theme.breakpoints.down('md')]: {
            marginTop: "5em",
            marginBottom: "5em",
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "3em",
            marginBottom: "3em"
        }
    },
    textContainer: {
        marginTop: "1.5em",
        [theme.breakpoints.down('md')]: {
            marginTop: "1em"
        },
        [theme.breakpoints.down('sm')]: {
            margin: "1em 1em 0 1em",
        }
    },
    cardMedia: {
        height: 150,
        width: 300,
        maxHeight: 600,
        objectFit: "fill",
        [theme.breakpoints.down('md')]: {
            width: "30em",
            height: 400
        },
        [theme.breakpoints.down('sm')]: {
            width: "35em",
            height: 400
        },
        [theme.breakpoints.down('xs')]: {
            width: "19em",
            height: 250
        }
    },
    seasonContainer: {
        display: "flex",
    },
    seasonImg: {
        height: 400,
        [theme.breakpoints.down('xs')]: {
            height:250
        }        
    },
    seasonData: {
        marginTop: "0.8em",
        marginLeft: "0.5em"
    },
}))
