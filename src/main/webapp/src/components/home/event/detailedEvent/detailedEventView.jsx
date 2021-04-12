import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailedEventView = () => {
    const [event, setEvent] = useState({
        name: "",
        type: "",
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3006/event/${id}`);
        setEvent(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {event.name}</li>
                <li className="list-group-item">type: {event.type}</li>
            </ul>
        </div>
    );
};

export default DetailedEventView;
