import React, {useState, useEffect} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import axios from "axios";
import office from "../images/adventure.png"
import "./detailEventView.css"
import UserList from "./userList"
import CommentList from "./comments"
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import swal from "sweetalert";
import {EVENT_TYPE, imageMapper} from "../imageMapper";

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
    const history = useHistory();
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

    const joinSuccessfully = () => {
        swal({
            title: "User Subscribed Successfully ",
            icon: "success",
        });
    }

    return (<div className="detail-event-container">
            <div>
                <button type="button" className="btn btn-primary" onClick={() => history.push('/event')}>Back To
                    Events
                </button>
                <h1 className="text-center event-header">Event Info</h1>
            </div>

            <div className={classes.root}>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={4}>
                        <div className="card card-view" style={style}>
                            <img src={imageMapper(event.type)} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <hr/>
                                <h5 className="card-title">{event.name}</h5>
                                <hr/>
                                <h6 className="card-title">Date : {event.createdOn}</h6>
                                <hr/>
                                <h6 className="card-title">Type : {event.type}</h6>
                                <hr/>
                                <p className="card-text">{event.description}</p>
                                <hr/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary" onClick={joinSuccessfully}>Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <UserList/>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="comment-cotainer text-center">
                            {(event && event.group) ? <CommentList group={event.group}/> : null}
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
