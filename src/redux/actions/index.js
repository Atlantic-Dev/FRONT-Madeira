import axios from 'axios';
import Swal from 'sweetalert2';

export function getAllCustomers(){
    return async function (dispatch){
        try{
            let response = await axios.get('http://54.160.226.161:3000/customers')
            return dispatch({type: 'GET_ALL', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    } 
}
export function searchCustomers(string){
    return async function (dispatch){
        try{
            let response = await axios.get(`http://54.160.226.161:3000/customers/search/${string}`)
            return dispatch({type: 'SEARCH', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    } 
}

export function registerCustomer(input){
    return async function(dispatch){
        try{
        let response = await axios.post('http://54.160.226.161:3000/customers/sign-up', input)
        return dispatch({type: 'CREATE', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}
export function postLogin(user) {
    return async function() {
        try {
            let response = await axios.post("http://54.160.226.161:3000/auth/sign-in", user)
            localStorage.setItem("token", response.data.accessToken)
            return window.open("http://localhost:3001/", "_self")
        } catch(e) {
            Swal.fire("Invalid data", "Email or password was incorrect. Please try again", "error")
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
    return async function(dispatch){
        try{
            return dispatch({
                type: "CLOSE_MODAL"
            })
        } catch(e) {
            console.log("Fail close modal")
        }
    }
}

export function getProfile(id, token){
    return async function (dispatch){
        try{
            let response = await axios.get(
                `http://54.160.226.161:3000/customers/${id}`, 
                {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            dispatch({type: "CUSTOMER_PROFILE", payload: response.data}) 
        }catch (e){
            console.log("This ID doesn't match any customer")
        }
    }
}

export function getAllUsers(){
    return async function (dispatch){
        try{
            console.log("entre")
            let response = await axios.get("http://54.160.226.161:3000/users/")
            console.log("pase", response.data)
            dispatch({type: "GET_USERS", payload: response.data})
        } catch (e){
            console.log(e)
        }
    }
}

export function deleteUser(id, token){
    return async function (dispatch){
        try{
            console.log("a")
        } catch (e){
            console.log(e)
        }
    }
}