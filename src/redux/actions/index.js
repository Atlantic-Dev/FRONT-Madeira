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
    try{
        return async function(dispatch){
        let response = await axios.post('http://54.160.226.161:3000/customers/sign-up', input)
        return dispatch({type: 'CREATE', payload: response.data})
        }
    } catch (e) {
        console.log(e)
    }
}
export function postLogin(user) {
    return async function(dispatch) {
        try {
            let response = await axios.post("http://54.160.226.161:3000/auth/sign-in", user)
            console.log(response.data)
        } catch(e) {
            console.log("error login")
        }
    }
}
export function setOpenModal() {
    return async function(dispatch) {
        try{
            return dispatch({
                type: "OPEN_MODAL"
            })
        } catch(e) {
            console.log("Fail open modal")
        }
    }
}

export function setCloseModal() {
    return async function(dispatch) {
        try{
            return dispatch({
                type: "CLOSE_MODAL"
            })
        } catch(e) {
            console.log("Fail close modal")
        }
    }
}