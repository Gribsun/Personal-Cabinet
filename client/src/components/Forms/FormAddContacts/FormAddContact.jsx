import React, {useState} from 'react';
import style from "./FormAddContact.module.css"
import {addContact} from "../../../redux/actions/contacts.action";
import {useDispatch} from "react-redux";

function FormAddContact({addButton, setAddButton}) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [phone, setPhone] = useState('');
    const [info, setInfo] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        dispatch(addContact(name,gender,phone,info));
        setName("");
        setGender("Male");
        setPhone("");
        setInfo("");
        setAddButton(false)
    }

    return (
        <>
            {addButton && (<form onSubmit={(event) => submitHandler(event)} className={style.formAddContact}>
                <button onClick={() => {setAddButton(false)}} className={style.formButton}>Скрыть</button>
                <input type='text'
                       onChange={(event) => setName(event.target.value)}
                       className={style.inputAddContact}
                       value={name}
                       placeholder='name'
                       required
                />
                <select value={gender}
                        onChange={(event) => setGender(event.target.value)}
                        className={style.inputAddContact}
                >
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
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
            </form>)}
        </>
    );
}

export default FormAddContact;
