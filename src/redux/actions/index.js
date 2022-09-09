import axios from 'axios';

export function getAllCustomers(){
    return async function (dispatch){
        let response = await axios.get('http://54.160.226.161:3000/customers')
        return dispatch({type: 'GET_ALL', payload: response.data})
    } 
}

export function searchCustomers(string){
    return async function (dispatch){
        let response = await axios.get(`http://54.160.226.161:3000/customers/search/${string}`)
        console.log(response)
        return dispatch({type: 'SEARCH', payload: response.data})
    } 
}

export function registerCustomer(input){
    return async function (dispatch){
        let response = await axios.post('http://54.160.226.161:3000/auth/sign-up')
        return response.data
    } 
}