import React from 'react';
import style from './Nav.module.css';
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className={style.nav}>
            <ul className={style.list}>
                <li key={'1'} className={style.linkAuth}>
                    <Link to='/'>Войти</Link>
                </li>
                <li key={'2'} className={style.linkAuth}>
                    <Link to='/registration'>Зарегистрироваться</Link>
                </li>
                <li key={'3'} className={style.linkAuth}>
                    <Link to='/logout'>Выйти</Link>
                </li>
                <li key={'4'} className={style.linkAuth}>
                    <Link to='/users'>Список пользователей</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
