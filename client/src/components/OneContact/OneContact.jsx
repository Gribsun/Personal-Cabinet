import React, {useEffect, useState} from 'react';
import style from './OneContact.module.css';
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/actions/contacts.action";
import FormEditContact from "../Forms/FormEditContact/FormEditContact";

function OneContact({id, index, name, gender, phone, info}) {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    function deleteContactHandler(id) {
        dispatch(deleteContact(id));
    }

    return (
        <div className={style.list}>
            <p className={style.oneElem}>{index+1}</p>
            <p className={style.oneElem}>{name}</p>
            <p className={style.oneElem}>{gender}</p>
            <p className={style.oneElem}>{phone}</p>
            <p className={style.oneElem}>{info}</p>
            <div className={style.oneElem}>
                {!visible && (<button onClick={() => deleteContactHandler(id)} className={style.butDel}>Удалить</button>)}
                {!visible && (<button onClick={() => setVisible(true)} className={style.butEdit}>Изменить</button>)}
                {visible && <FormEditContact id={id} visible={visible} setVisible={setVisible} />}
            </div>
        </div>

    );
}

export default OneContact;
