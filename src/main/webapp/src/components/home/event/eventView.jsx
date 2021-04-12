import React, {useState, useEffect} from "react";
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import SingleEventView from "./singleEventView";
import "./event.css"
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function EventView() {
    const classes = useStyles();
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const res = await axios.get(`http://localhost:3006/event`);
        setEvents(res.data);
    }
    useEffect(() => {
        loadEvents();
    }, [])


    return (<>
            <div className="create-event">
                <Link type="button" to="/event/create" className="btn btn-primary create-event">Create Event</Link>
            </div>
            <div className={`${classes.root} home-event-view-container`}>
                <Grid container spacing={6} justify="space-around" alignItems="center">
                    {events.map(data => {
                        return <SingleEventView data={data}/>
                    })}
                </Grid>
            </div>
        </>
    )
}

export default EventView;