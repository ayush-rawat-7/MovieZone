import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    mainContainer: {
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    title: {
        color: "#ffffff",
        zIndex: 2000,
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.3rem"
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"2rem"
        }
    },
    backHome: {
        width: "20em",
        height: "3.3em",
        fontSize: "1.1rem",
        marginTop: "2em",
        border: "none",
        color: "#fff",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('sm')]: {
            width: "15em",
            height: "3em",
            fontSize: "1rem",
        },
        [theme.breakpoints.down('xs')]: {
            width: "12em",
            height: "3em",
            fontSize: "0.9rem",
        }
    },
    backImg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0.7",
        objectFit:'cover'
    },
}))