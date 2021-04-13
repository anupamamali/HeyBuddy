import React, {useState} from "react";
import loginImg from "../../login.svg";
import axios from "axios";



export function Register(props) {


    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async e => {
        // e.preventDefault();
            const res = await axios.post(`/api/auth/signup`,
            {
                "userName":username,
                "password":password,
                "phoneNumber":phoneNumber,
                "email":email,
                "roles":[]
            })
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
