/* login.jsx */
import React ,{useState}from "react";
import loginImg from "../../login.svg";
import axios from 'axios';
import swal from 'sweetalert';


async function loginUser(credentials) {
    let resData="";
    await axios.post(`/api/auth/signin`,{
        "userName":credentials.username,
        "password":credentials.password
    }).then(res => {
        resData = res.data;
    })
        .catch(err => {
            console.log(err.response.data.error);
            if (err.response) {
                swal({
                    title: "Invalid User Name or Password !!!",
                    icon: "error",
                });
            } else if (err.request) {
                // client never received a response, or request never left
            } else {
                // anything else
            }
        })
    return resData;

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
        localStorage.setItem('user', JSON.stringify(token));
        setToken({token:token.accessToken});
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