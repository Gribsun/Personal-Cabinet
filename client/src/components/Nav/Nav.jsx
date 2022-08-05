import React, {useEffect} from 'react';
import style from './Nav.module.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../../redux/actions/checkSession.action";

function Nav() {

    const dispatch = useDispatch();
    const isAuth = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    function logoutHandler() {
        axios
            .post("http://localhost:3010/logout", {}, { withCredentials: true })
            .then((response) => {
                dispatch(checkAuth());
            });
    }

    return (
        <div className={style.nav}>
            <ul className={style.list}>
                {!isAuth && <li key={'1'} className={style.linkAuth}>
                    <Link to='/'>Войти</Link>
                </li>}
                {!isAuth && <li key={'2'} className={style.linkAuth}>
                    <Link to='/registration'>Зарегистрироваться</Link>
                </li>}
                {isAuth && <li key={'3'} className={style.linkAuth} onClick={logoutHandler}>
                    <Link to='/'>Выйти</Link>
                </li>}
                {isAuth && <li key={'4'} className={style.linkAuth}>
                    <Link to='/users'>Список контактов</Link>
                </li>}
            </ul>
        </div>
    );
}

export default Nav;
