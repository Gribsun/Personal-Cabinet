import React from 'react';
import style from './Nav.module.css';
import {Link} from "react-router-dom";
import axios from "axios";

function Nav() {

    function logoutHandler() {
        axios
            .post("http://localhost:3010/logout", {}, { withCredentials: true })
            .then((response) => {});
    }

    return (
        <div className={style.nav}>
            <ul className={style.list}>
                <li key={'1'} className={style.linkAuth}>
                    <Link to='/'>Войти</Link>
                </li>
                <li key={'2'} className={style.linkAuth}>
                    <Link to='/registration'>Зарегистрироваться</Link>
                </li>
                <li key={'3'} className={style.linkAuth} onClick={logoutHandler}>
                    <Link to='/'>Выйти</Link>
                </li>
                <li key={'4'} className={style.linkAuth}>
                    <Link to='/users'>Список контактов</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
