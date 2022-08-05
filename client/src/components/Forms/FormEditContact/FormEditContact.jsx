import React, {useState} from 'react';
import style from "./FormEditContact.module.css";
import {useDispatch} from "react-redux";
import {editContact} from "../../../redux/actions/contacts.action";

function FormEditContact({id, visible, setVisible}) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [phone, setPhone] = useState('');
    const [info, setInfo] = useState('');

    function submitHandler(event) {
        event.preventDefault();
        dispatch(editContact(id, name, gender, phone, info));

        setName("");
        setGender("Male");
        setPhone("");
        setInfo("");
        setVisible(false)
    }

    return (
        <>
            {visible && (<form onSubmit={(event) => submitHandler(event)} className={style.formEditContact}>
                <div className={style.inputs}>
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
                </div>
                <div className={style.buttons}>
                    <button onClick={() => {setVisible(false)}} className={style.formButton}>
                        Скрыть
                    </button>
                    <button type='submit' className={style.formButton}>
                        Изменить
                    </button>
                </div>
            </form>)}
        </>
    );
}

export default FormEditContact;
