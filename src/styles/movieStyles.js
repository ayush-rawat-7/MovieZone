import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2em",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "0em"
        }
    },
    rowContainer: {
        backgroundColor: theme.palette.primary.main,
        position: "relative",
        height: "80vh",
        marginBottom: "1em",
        [theme.breakpoints.down('md')]: {
            height: "60vh"
        },
        [theme.breakpoints.down('sm')]: {
            height: "60vh"
        },
        [theme.breakpoints.down('xs')]: {
            height: "40vh"
        }
    },
    backgroundContainer: {
        height: "100%",
        width: "100%",
    },
    searchContainer: {
        position: "absolute",
        marginTop: "24vh",
        [theme.breakpoints.down('md')]: {
            marginTop: "15vh"
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "10vh",
        }
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
        [theme.breakpoints.down('md')]: {
            fontSize: "4.2rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "3.8rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5rem"
        },

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
        },
        [theme.breakpoints.down("md")]: {
            height: "2.2em",
            margin: "0em auto",
        },
        [theme.breakpoints.down('sm')]: {
            height: "2em",
            width: "70%"
        },
        [theme.breakpoints.down('xs')]: {
            height: "2em",
            width: "70%",
            fontSize: "1.3rem",
            "&::placeholder": {
                color: theme.palette.primary.light,
                fontSize: "1.4rem",
            },
        },
    },
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        margin: "1em 1em 1em 1em",
        borderRadius: "15px",
        backgroundImage: "linear-gradient(#fff, #111)",
        boxShadow: "0px 0px 5px #111 , 0px 0px 5px 1px #111 inset",
        "&:hover": {
            backgroundImage: "linear-gradient(#ffffff, #16213E)",
            cursor: "pointer"
        },
        [theme.breakpoints.down('md')]: {
            width: "15em",
            height: "auto",
        },
        [theme.breakpoints.down('sm')]: {
            width: "14em",
            height: "auto",
        },
        [theme.breakpoints.down('xs')]: {
            width: "18em",
            height: "auto",
            margin: "0em 1em 2em 1em",
        },
    },
    cardLink:{
        width: "20em",
        [theme.breakpoints.down('md')]: {
            width: "15em",
            height: "auto",
        },
        [theme.breakpoints.down('sm')]: {
            width: "14em",
            height: "auto",
        },
        [theme.breakpoints.down('xs')]: {
            width: "18em",
            height: "auto",
            margin: "0em 1em 2em 1em",
        },
    },
    movieImg: {
        width: "100%",
        height: "30em",
        display: "block",
        margin: "0px auto",
        borderRadius: "15px 15px 0 0",
        [theme.breakpoints.down('md')]: {
            height: "20em"
        },
        [theme.breakpoints.down('xs')]:{}
    },
    titleContainer: {
        width: "90%",
        margin: "auto",
        textAlign: "center",
        color: "#fff",
    },
    errorContent: {
        textAlign: "center",
        color: theme.palette.primary.light,
        marginTop: "0.5em",
        [theme.breakpoints.down('md')]: {
            fontSize: "3rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.8rem"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2rem",
            margin: "0"
        },
    },
    errorButton: {
        width: "14em",
        height: "3em",
        border: 'none',
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
        fontWeight: 700,
        margin: "2em auto",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    }
}))