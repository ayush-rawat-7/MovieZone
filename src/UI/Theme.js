import { createTheme } from "@material-ui/core";
const backgroundColor = "#16213E";
const backgroundColorLight = "#FF3745";
export default createTheme({
    palette: {
        common: {
            carrot: "#FF3758",
            carrotLight: "#ff5e79",
            lightBlue: "#0F3460"
        },
        primary: {
            main: `${backgroundColor}`
        },
        secondary: {
            main: `${backgroundColorLight}`,
        },
    },
    typography: {
        fontSize: 14,
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem",
            minWidth: 10,
        },
        h1: {
            fontWeight: '400',
            lineHeight: 1.5,
            color: 'white',
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontFamily: "Roboto",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#fff',
        },
        h4: {
            fontWeight: 700,
        },
        h5: {
            fontFamily: "Roboto",
            fontSize: '1.5rem',
            marginRight: "auto",
            marginLeft: "auto",
            fontWeight: '400',
        },

        body1: {
            fontSize: '1.5rem',
            color: "white",
            fontWeight: "400"
        },
    },
    overrides: {
        MuiCardMedia: {
            root: {
                height: 400,
                minWidth: 300
            },
        },
        MuiCard: {
            root: {
                maxWidth: 500,
                height: "auto",
            }
        },
        MuiSwitch: {
            root: {
                marginLeft: "0.5em",
                width: 65,
                height: 40
            },
            switchBase: {
                transform: "scale(1.1)"
            },
            thumb: {
                transform: "scale(1.4)",
            },
            track: {
                width: "100px"
            }
        }
    }
})