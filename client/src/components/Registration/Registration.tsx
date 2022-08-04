import React, {useState} from 'react';
import style from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusInfo, setStatusInfo] = useState("");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function regHandler(event: React.FormEvent) {
        event.preventDefault();
        axios
            .post(
                "http://localhost:3010/registration",
                { name, email, password },
                { withCredentials: true }
            )
            .then((response) => {
                if (response.data.message) {
                    setStatusInfo(response.data.message);
                } else {
                    navigate("/users");
                }
            });
    }

    return (
        <form onSubmit={(event) => regHandler(event)} className={style.regForm}>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value);}} required className={style.input} placeholder='name'/>
            <input type="text" value={email} onChange={(event) => {setEmail(event.target.value);}} required className={style.input} placeholder='email'/>
            <input type="password" value={password} onChange={(event) => {setPassword(event.target.value);}} required className={style.input} placeholder='password'/>
            <button type="submit" className={style.button}>
                REGISTRATION
            </button>
        </form>
    );
}

export default Registration;
