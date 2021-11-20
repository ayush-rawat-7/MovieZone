import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        position: "relative",
        marginBottom: "-1.2em"
    },
    loginButton: {
        fontSize: '1.4rem',
        textTransform: 'none',
        height: '60px',
        color: 'white',
        width: '16em',
        borderRadius: "5px",
        backgroundColor: theme.palette.common.carrot,
        "&:hover": {
            backgroundColor: theme.palette.common.carrotLight
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            width: "14em",
            height: "50px"
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            width: "10em",
            height: "50px",
            marginTop: "-1em"
        }
    },
    title: {
        marginBottom: "1.25em",
        zIndex: "2000"
    },
    back: {
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        opacity: "0.3"
    },
    h1: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "5em",
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "4em",
        },
    },
    triangle: {
        backgroundColor: theme.palette.common.lightBlue,
        minWidth: "40em",
        minHeight: "40em",
        position: "absolute",
        transform: "rotate(45deg)",
        left: "-20em",
        top: "-20em",
        [theme.breakpoints.down('md')]: {
            minWidth: "30em",
            minHeight: "30em",
            left: "-15em",
            top: "-15em",
        },
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },
    },
}))