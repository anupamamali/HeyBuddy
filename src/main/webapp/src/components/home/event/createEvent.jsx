import React, { useState } from "react";
import axios from 'axios'
import { useHistory }  from "react-router-dom";
import {EVENT_TYPE} from "./imageMapper"

const CreateEvent = () => {
    let history = useHistory();
    const [event, setEvent] = useState({
        name: "",
        type: "",
        createdOn:"",
        description:""
    });


    const { name, type ,createdOn,description} = event;
    const onInputChange = e => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const onSelectChange = e => {
        setEvent({ ...event, type : e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("/event", {...event, createdBy:{
                "name": "xyz"
            }});
        history.push("/event");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Event Information</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Event Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            placeholder="Enter Date"
                            name="createdOn"
                            value={createdOn}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="textarea"
                            className="form-control form-control-lg"
                            placeholder="Enter description"
                            name="description"
                            value={description}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" value={type} onChange={e=>onSelectChange(e)}>
                            {/*<option selected>Type...</option>*/}
                            <option value={EVENT_TYPE.ADVENTURE}>Adventure</option>
                            <option value={EVENT_TYPE.CAUSE}>Cause</option>
                            <option value={EVENT_TYPE.SPORT}>Sport</option>
                            <option value={EVENT_TYPE.DANCE}>Dance</option>
                            <option value={EVENT_TYPE.LEARNING}>Learning</option>
                            <option value={EVENT_TYPE.PARTY}>Party</option>
                            <option value={EVENT_TYPE.SHOPING}>Shoping</option>
                            <option value={EVENT_TYPE.TOUR}>Tour</option>
                        </select>
                    </div>


                    <button className="btn btn-primary btn-block">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
