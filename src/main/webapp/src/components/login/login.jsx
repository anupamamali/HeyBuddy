/* login.jsx */
import React ,{useState}from "react";
import loginImg from "../../login.svg";
import axios from 'axios';


async function loginUser(credentials) {
    const res = await axios.get(`http://localhost:3006/token`);
    return res.data;
}

export function Login({setToken}){

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

        return (
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" onChange={e => setUserName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        );
}