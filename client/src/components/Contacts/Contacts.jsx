import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from './Contacts.module.css';
import { getContacts, addContact } from "../../redux/actions/contacts.action";
import OneContact from "../OneContact/OneContact";

function Contacts() {

    const [addButton, setAddButton] = useState(false);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [info, setInfo] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [])

    function submitHandler(event) {
        event.preventDefault();
        dispatch(addContact(name,gender,phone,info));
        setName("");
        setGender("");
        setPhone("");
        setInfo("");
    }

    const contacts = useSelector((store) => store.contacts);

    return (
        <div className={style.wrapper}>
            {addButton ? (
                <form onSubmit={(event) => submitHandler(event)} className={style.formAddContact}>
                    <input type='text'
                           onChange={(event) => setName(event.target.value)}
                           className={style.inputAddContact}
                           value={name}
                           placeholder='name'
                           required
                    />
                    <input type='text'
                           onChange={(event) => setGender(event.target.value)}
                           className={style.inputAddContact}
                           value={gender}
                           placeholder='gender'
                           required
                    />
                    <input type='text'
                           onChange={(event) => setPhone(event.target.value)}
                           className={style.inputAddContact}
                           value={phone}
                           placeholder='phone'
                           required
                    />
                    <input type='text'
                           onChange={(event) => setInfo(event.target.value)}
                           className={style.inputAddContact}
                           value={info}
                           placeholder='info'
                           required
                    />
                    <button type='submit' className={style.formButton}>
                        Добавить
                    </button>
                </form>
            ) : (<button onClick={()=>setAddButton(true)}>Добавить контакт</button>)}

            <div className={style.list}>
                <p className={style.oneElem}>ID</p>
                <p className={style.oneElem}>Name</p>
                <p className={style.oneElem}>Gender</p>
                <p className={style.oneElem}>Phone</p>
                <p className={style.oneElem}>Info</p>
            </div>
            {contacts.map((item, index) =>
                <OneContact key={item.id} index={index} name={item.name} gender={item.gender} phone={item.phone} info={item.info}/>)}
        </div>
    );
}

export default Contacts;
