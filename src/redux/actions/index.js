import axios from 'axios';

export function getAllCustomers(){
    console.log("la action")
    return async function (dispatch){
    console.log("adentro de la action")
        let response = await axios.get('http://3.91.178.105:3000/customers')
    console.log("despues del axios")
        return dispatch({type: 'GET_ALL', payload: response.data})
        }
            
}