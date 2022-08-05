import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from './Authentication.module.css'
import {checkAuth} from "../../redux/actions/checkSession.action";

function Authentication() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusInfo, setStatusInfo] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const navigate = useNavigate();

    function logHandler(event) {
        event.preventDefault();
        axios
            .post(
                "http://localhost:3010/login",
                { email, password },
                { withCredentials: true }
            )
            .then((response) => {
                if (response.data.message) {
                    setStatusInfo(response.data.message);
                } else {
                    dispatch(checkAuth());
                    navigate("/users");
                }
            });
    }

    return (
        <>
            {statusInfo ? <p className="info">{statusInfo}</p> : null}
            <form onSubmit={(event) => logHandler(event)} className={style.loginForm}>
                <input type="text" value={email} onChange={(event) => {setEmail(event.target.value);}} required className={style.input} placeholder='email'/>
                <input type="password" value={password} onChange={(event) => {setPassword(event.target.value);}} required className={style.input} placeholder='password'/>
                <button type="submit" className={style.button}>
                    LOGIN
                </button>
            </form>
        </>
    );
}

export default Authentication;
