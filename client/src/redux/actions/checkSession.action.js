import axios from "axios";

export const checkAuth = () => (dispatch) => {
    axios.post('http://localhost:3010/checksession', {}, { withCredentials: true })
        .then( response => {
            dispatch({
                type: "CHECK_AUTH",
                payload: response.data,
            })
        })
}
