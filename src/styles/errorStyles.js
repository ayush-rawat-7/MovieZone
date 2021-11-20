import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    mainContainer: {
        minHeight: "100vh",
        maxHeight: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    title: {
        color: "#ffffff",
        zIndex: 2000
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
        }
    },
    backImg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: "0.7"
    },
}))