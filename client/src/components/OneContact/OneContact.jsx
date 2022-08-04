import React from 'react';
import style from './OneContact.module.css';

function OneContact({index, name, gender, phone, info}) {

    return (
        <div className={style.list}>
            <p className={style.oneElem}>{index}</p>
            <p className={style.oneElem}>{name}</p>
            <p className={style.oneElem}>{gender}</p>
            <p className={style.oneElem}>{phone}</p>
            <p className={style.oneElem}>{info}</p>
        </div>

    );
}

export default OneContact;
