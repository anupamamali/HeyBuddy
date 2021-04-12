import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import Adventure from './images/adventure.png'
import Cause from './images/cause.png'
import Sport from './images/sport.png'
import {Link} from "react-router-dom";

const EVENT_TYPE = {
    ADVENTURE: "Adventure",
    SPORT: "Sport",
    CAUSE: "Cause"
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const imageMapper = (type) => {
    switch (type) {
        case EVENT_TYPE.ADVENTURE :
            return Adventure;
        case EVENT_TYPE.CAUSE :
            return Cause;
        case EVENT_TYPE.SPORT :
            return Sport;
    }
}


const SingleEventView = ({data}) => {
    const classes = useStyles();
    return (
        <Grid item xs={4}>
            <Link exact to={`/event/${data.id}`}>
                <div className={`${classes.paper}`}>
                    <img src={imageMapper(data.type)} alt="my image" className={"single-event-view-logo"}/>
                    <h4>{data.name}</h4>
                </div>
            </Link>
        </Grid>
    )
}

export default SingleEventView;