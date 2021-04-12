import React, { useState } from "react";
import axios from 'axios'
import { useHistory }  from "react-router-dom";

const CreateEvent = () => {
    let history = useHistory();
    const [event, setEvent] = useState({
        name: "",
        type: "",
    });


    const { name, type } = event;
    const onInputChange = e => {
        setEvent({ ...event, [e.target.name]: e.target.value });
    };

    const onSelectChange = e => {
        setEvent({ ...event, type : e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3006/event", event);
        history.push("/event");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
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
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Type</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01" value={type} onChange={e=>onSelectChange(e)}>
                            {/*<option selected>Type...</option>*/}
                            <option value="Adventure">Adventure</option>
                            <option value="Cause">Cause</option>
                            <option value="Sport">Sport</option>
                        </select>
                    </div>


                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
