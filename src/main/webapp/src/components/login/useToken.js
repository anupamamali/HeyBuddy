import {useState} from 'react';

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const getLoggedUser = () => {
        const tokenString = localStorage.getItem('user');
        const userToken = JSON.parse(tokenString);
        return userToken;
    };



    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };


    const removeToken = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken("");
    };


    return {
        removeToken: removeToken,
        getLoggedUser:getLoggedUser,
        setToken: saveToken,
        token
    }

}