import axios from 'axios';
import Swal from 'sweetalert2';
const { SERVER_URL, CLIENT_URL } = process.env

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
            let response = await axios.post("SERVER_URL/auth/sign-in", user)
            localStorage.setItem("token", response.data.accessToken)
            return window.open("CLIENT_URL", "_self")
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
            let response = await axios.get("http://54.160.226.161:3000/users/")
            dispatch({type: "GET_USERS", payload: response.data})
        } catch (e){
            console.log(e)
        }
    }
}

export function deleteUser(id, token){
    return async function (){
        try{
            let response = await axios.delete(
                `http://54.160.226.161:3000/users/${id}`, 
                {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            response.data.isActive === false 
            ?
            Swal.fire("User deleted successfully","","success")
            .then((response) => {
                if (response.isConfirmed){
                    window.open("http://localhost:3001/dashboard", "_self")
                } else {
                    window.open("http://localhost:3001/dashboard", "_self")
                }
            })
            :
            Swal.fire("Something went wrong", "Please try again or contact support", "error")
        } catch (e){
            console.log("entro al catch?",e)
        }
    }
}

export function getAvatars(){
    return async function (dispatch){
        try{
            let response = await axios.get('http://54.160.226.161:3000/avatar-image')
            return dispatch({type: "GET_AVATARS", payload: response.data})
        } catch (e){
            console.log(e)
        }
    }
}

export function uploadAvatar(data){
    return async function(){
        try{
            let response = await axios.post('http://54.160.226.161:3000/avatar-image', data)
            console.log("la respuesta",response.data)
        }catch(e){
            console.log(e)
        }
    }
}

export function resetCustomerPassword(id, currentPassword, newPassword){
    return async function (dispatch){
        try {
            const response = await axios.post(`SERVER_URL/customers/${id}`, currentPassword, newPassword)
            if(response.data === "Wrong current password"){
                Swal.fire("Wrong current password. Please try again.","warning")
            } else {
                return {
                    type: "RESET_CUSTOMER_PASSWORD",
                    payload: response.data
                }
            }
        } catch (error){
            console.log(error)
        }
    }
}

export function resetUserPassword(id, currentPassword, newPassword){
    return async function (dispatch){
        try {
            const response = await axios.post(`SERVER_URL/users/${id}`, currentPassword, newPassword)
            if(response.data === "Wrong current password"){
                Swal.fire("Wrong current password. Please try again.","warning")
            } else {
                return {
                    type: "RESET_USER_PASSWORD",
                    payload: response.data
                }
            }
        } catch (error){
            console.log(error)
        }
    }
}