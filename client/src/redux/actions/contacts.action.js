import axios from "axios";

export const getContacts = () => async (dispatch) => {
    try {
        await axios.get('http://localhost:3010/contacts',{ withCredentials: true })
            .then(response => {
                if (response.data) {
                    dispatch({
                        type: 'GET_CONTACTS',
                        payload: response.data,
                    })
                }
            })
    } catch (err) {
        console.log(err);
    }
};

export const addContact = (name,gender,phone,info) => async (dispatch) => {
    try {
        console.log(name,gender,phone,info)
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
