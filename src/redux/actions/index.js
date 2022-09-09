import axios from 'axios';

export function getAllCustomers(){
    return async function (dispatch){
        let response = await axios.get('http://100.26.145.93:3000/customers')
        return dispatch({type: 'GET_ALL', payload: response.data})
    } 
}

export function postLogin(user) {
    return async function(dispatch) {
        try {
            let response = await axios({
                method: "post",
                url: ""
            })
        } catch(e) {

        }
    }
}