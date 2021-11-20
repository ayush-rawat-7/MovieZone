import { makeStyles } from "@material-ui/core"


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
    // card: {
    //     position: 'relative',
    // },
    cardContainer: {
        width: "60em",
        marginTop: "8em",
        marginBottom: "8em",
        [theme.breakpoints.down('md')]: {
            marginTop: "5.5em",
            marginBottom: "5.5em",
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "2em",
            marginBottom: "2em",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "3em",
            marginBottom: "3em",
        }
    },
    cardMedia: {
        height: 500,
        maxWidth: 800,
        width: 600,
        maxHeight: 600,
        display: 'block',
        borderRadius: "50px",
        objectFit: "fill",
        opacity: "0.6",
        "&:hover": {
            boxShadow: `0 0 15px 5px ${theme.palette.secondary.main}`
        },
        [theme.breakpoints.down('md')]: {
            width: "30em",
            height: 400
        },
        [theme.breakpoints.down('sm')]: {
            width: "35em",
            height: 400,
            "&:hover": {
                boxShadow: `none`
            },
        },
        [theme.breakpoints.down('xs')]: {
            width: "19em",
            height: 250,
            "&:hover": {
                boxShadow: `none`
            },
        }

    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    moviesTypo: {
        color: "#fff",
        fontSize: "3.2em",
        position: "absolute",
        top: "4.5em",
        left: "4em",
        [theme.breakpoints.down('md')]: {
            top: "3.5em",
            left: "3em",
        },
        [theme.breakpoints.down('sm')]: {
            top: "4.5em",
            left: "5.3em",
            fontSize: "2.5em"
        },
        [theme.breakpoints.down('xs')]: {
            top: "2.8em",
            left: "2.3em",
            fontSize: "2.5em"
        },
    },
    showsTypo: {
        color: "#fff",
        fontSize: "3.2em",
        position: "absolute",
        top: "4.5em",
        left: "3.5em",
        [theme.breakpoints.down('md')]: {
            top: "3.5em",
            left: "2.6em",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5em",
            top: "4.5em",
            left: "4.5em",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5em",
            top: "2.6em",
            left: "1.7em",
        }
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
            width: "70vw",
            fontSize:"1.4rem"
        },
        [theme.breakpoints.down('xs')]: {
            height: "180px",
            width: "80vw",
            fontSize: "1.5em",
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