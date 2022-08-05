import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from './Contacts.module.css';
import { getContacts } from "../../redux/actions/contacts.action";
import { checkAuth } from "../../redux/actions/checkSession.action";
import OneContact from "../OneContact/OneContact";
import FormAddContact from "../Forms/FormAddContacts/FormAddContact";

function Contacts() {
    const dispatch = useDispatch();

    const isAuth = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const [addButton, setAddButton] = useState(false);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch])

    const contacts = useSelector((store) => store.contacts);

    return (
        <div className={style.wrapper}>
            {isAuth && addButton ? (
                <FormAddContact addButton={addButton} setAddButton={setAddButton}/>
            ) : (<button onClick={() => setAddButton(true)} className={style.formButton}>Добавить контакт</button>)}

            <div className={style.list}>
                <p className={style.oneElem}>ID</p>
                <p className={style.oneElem}>Name</p>
                <p className={style.oneElem}>Gender</p>
                <p className={style.oneElem}>Phone</p>
                <p className={style.oneElem}>Info</p>
                <p className={style.oneElem}>Settings</p>
            </div>
            {contacts.map((item, index) =>
                <OneContact key={item.id} index={index} id={item.id} name={item.name} gender={item.gender} phone={item.phone}
                            info={item.info} addButton={addButton} setAddButton={setAddButton} className={style.oneElem} />)}
        </div>
    );
}

export default Contacts;
