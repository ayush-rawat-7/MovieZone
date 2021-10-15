import { createTheme } from "@material-ui/core";

const backgroundColor = "#16213E";
const backgroundColorLight = "#FF3745";
export default createTheme({
    palette: {
        common: {
            carrot: "#FF3758",
            carrotLight: "#ff5e79",
            lightBlue : "#0F3460"
        },
        primary: {
            main: `${backgroundColor}`
        },
        secondary: {
            main: `${backgroundColorLight}`,
        },
        

    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: "700",
            fontSize: "1rem",
            minWidth: 10,
        },
        buttons: {
            fontSize: '1rem',
            textTransform: 'none',
            height: '45px',
            color: 'white',
            width: '15em',
        },
        h1: {
            fontWeight: '400',
            lineHeight: 1.5,
            color: 'white',
        },
        // h3: {
        //     fontFamily: "Pacifico",
        //     fontSize: '2.5rem',
        //     color: arcBlue
        // },
        // h4: {
        //     fontFamily: "Roboto",
        //     fontSize: '1.75rem',
        //     color: arcBlue,
        //     fontWeight: '700',
        // },
        // subtitle1: {
        //     fontSize: '1.25rem',
        //     fontWeight: '300',
        //     color: arcGrey,
        // },
        // subtitle2: {
        //     color: "#fff",
        //     fontSize: '1.25rem',
        //     fontWeight: '300'
        // },
        body1: {
            fontSize: '1.5rem',
            color: "white",
            fontWeight: "400"
        },
        // learnButton: {
        //     borderColor: arcBlue,
        //     color: arcBlue,
        //     borderWidth: 2,
        //     textTransform: "none",
        //     borderRadius: 50,
        //     fontFamily: "Roboto",
        //     fontWeight: "bold",
        // }
    }
})