import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import office from "../images/adventure.png"
import "./detailEventView.css"
import UserList from "./userList"
import CommentList from "./comments"
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


const DetailedEventView = () => {
    const [event, setEvent] = useState({
        name: "",
        type: "",
    });
    const {id} = useParams();
    const classes = useStyles();


    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`${id}`);
        setEvent(res.data);
    };
    const style = {
        width: "15rem"
    }
    return (<div className="detail-event-container">
            <h1 className="text-center">Event Info</h1>
            <div className={classes.root}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <div className="card card-view" style={style}>
                            <img src={office} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{event.name}</h5>
                                <h6 className="card-title">Date : {event.createdOn}</h6>
                                <h6 className="card-title">Type : {event.type}</h6>
                                <p className="card-text">{event.description}</p>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary">Join</button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <UserList/>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="comment-cotainer text-center">
                            <CommentList groupId={event.groupId}/>
                        </div>

                    </Grid>
                </Grid>
            </div>
            <br/>
            <br/>
            <br/>


        </div>
    );
};

export default DetailedEventView;
