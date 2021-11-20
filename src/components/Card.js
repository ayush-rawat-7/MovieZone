import { Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        margin: "1em 1em",
        borderRadius:"5px",
        boxShadow:"0 0 5px #111"
    },
    media: {
        objectFit:"cover"
    },
}))

export const SingleCard = (props) => {
    const classes = useStyles();
    const { img, title } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    className={classes.media}
                    component="image"
                    image={img}
                    title={title}
                />
                <CardContent >
                    <Typography variant="h5" style={{padding:"0.2em",textAlign:'center'}} component="h2">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
