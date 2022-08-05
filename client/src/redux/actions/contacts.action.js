import axios from "axios";

export const getContacts = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3010/contacts',{ withCredentials: true })

        if (response.data) {
            dispatch({
                type: 'GET_CONTACTS',
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const getOneContact = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3010/contacts/${id}`,{ withCredentials: true })

        if (response.data) {
            dispatch({
                type: 'GET_ONE_CONTACT',
                payload: response.data,
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const addContact = (name,gender,phone,info) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:3010/contacts',
            {name,gender,phone,info},
            {withCredentials: true}
        );
        dispatch({
            type: 'ADD_CONTACT',
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const editContact = (id, name, gender, phone, info) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:3010/contacts/${id}`,
            {name,gender,phone,info},
            {withCredentials: true}
        );
        dispatch({
            type: 'EDIT_CONTACT',
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
}


export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:3010/contacts/${id}`,
            {withCredentials: true}
        );
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
}
