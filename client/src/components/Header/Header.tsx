import React from 'react';
import Nav from "../Nav/Nav";
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.header}>
            <Nav />
        </header>
    );
}

export default Header;
