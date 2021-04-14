import React, {useState} from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import swal from "sweetalert";



export function Register(props) {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async e => {
        // e.preventDefault();
        if(username !="" && password !="" && email !="" && phoneNumber !=""){
            await axios.post(`/api/auth/signup`,
                {
                    "userName":username,
                    "password":password,
                    "phoneNumber":phoneNumber,
                    "email":email,
                    "roles":[]
                }).then(res => {
                if(res.data == "User registered successfully!"){
                    swal({
                        title: "User Registered Successfully",
                        icon: "success",
                    });
                    setUserName("");
                    setPassword("");
                    setEmail("");
                    setPhoneNumber("");
                }
                console.log(res.data)
            })
                .catch(err => {
                    console.log(err.response.data.error);
                    console.log(err.response.data);
                    console.log(err.response);
                    function alertMsg(text){
                        swal({
                            title: "Please provide the valid info",
                            text: text,
                            icon: "warning",
                        });
                    }
                    if (err.response) {
                        if(err.response.data == "Error: Username is already taken!"){
                            alertMsg("Username is already taken!",);
                        } else if(err.response.data == "Error: Email is already in use!"){
                            alertMsg("Email is already in use!",);
                        }
                        else{
                            alertMsg("");
                        }
                    } else if (err.request) {
                        // client never received a response, or request never left
                    } else {
                        // anything else
                    }
                })
        }else{
            swal({
                title: "Please provide the valid info",
                text: "Feilds can not be empty",
                icon: "warning",
            });
        }


    }

    return (
        <div className="base-container" ref={props.containerRef}>

            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" value={username} onChange={e=>setUserName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        {/*<input type="number" name="phone" placeholder="phone number" maxLength="10"/>*/}
                        <input type="number" name="phone" placeholder="phone number" maxLength="10" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleSubmit}>
                    Register
                </button>
            </div>
        </div>
    );
}
