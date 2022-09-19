import axios from 'axios';
import Swal from 'sweetalert2';

export function getAllCustomers(){
    return async function (dispatch){
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}customers`)
            return dispatch({type: 'GET_ALL', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    } 
}
export function searchCustomers(string){
    return async function (dispatch){
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}customers/search/${string}`)
            if (response.data.length === 0){
                Swal.fire("No customers found", "We didn't find any customers with that ID or nickname", "error")
                let respuesta = await axios.get(`${process.env.REACT_APP_SERVER_URL}customers`)
                return dispatch({type: 'GET_ALL', payload: respuesta.data})
            }else {
                return dispatch({type: 'SEARCH', payload: response.data})
            }
        } catch (e) {
            console.log(e)
        }
    } 
}

export function registerCustomer(input){
    return async function(dispatch){
        try{
        let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}customers/sign-up`, input)
        return dispatch({type: 'CREATE', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}

export function postLogin(input) {
    return async function() {
        try {
            let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}auth/sign-in`, input)
            localStorage.setItem("token", response.data.accessToken)
            return window.open(`${process.env.REACT_APP_CLIENT_URL}`, "_self")
        } catch(e) {
            Swal.fire("Invalid data", "Email or password was incorrect. Please try again", "error")
        }
    }
}

export function deleteCustomer(id, token){
    return async function(){
        try{
            await axios.delete(
                `${process.env.REACT_APP_SERVER_URL}customers/${id}`, 
                {
                headers: {
                  Authorization: `Bearer ${token}`,
                }
            })
            Swal.fire("Customer account disabled successfully", "", "success")
            .then((result) => {
                if (result.isConfirmed){
                navigate('/', {replace: true})
                } else {
                navigate('/', {replace: true})
                }
            })
        }catch (e){
            return e
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
                `${process.env.REACT_APP_SERVER_URL}customers/${id}`, 
                {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            dispatch({type: "PROFILE", payload: response.data})
        }catch (e){
            console.log("This ID doesn't match any customer")
        }
    }
}

export function getAllUsers(token){
    return async function (dispatch){
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}users/`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            dispatch({type: "GET_USERS", payload: response.data})
        } catch (e){
            console.log(e)
        }
    }
}

export function getUser(id, token){
    return async function(dispatch){
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}users/${id}`, 
                {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            dispatch({type: "PROFILE", payload: response.data}) 
        } catch (e) {
            console.log(e)
        }
    }
}

export function registerUser(value, token){
    return async function(){
        try{
        let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}users/sign-up`, value, token)
        Swal.fire(`Account created!`, `The user account for ${response.data.name} ${response.data.surname} is ready to use`, "success")
        } catch (e) {
            console.log(e)
        }
    }
}

export function deleteUser(id, token){
    return async function (){
        try{
            let response = await axios.delete(
                `${process.env.REACT_APP_SERVER_URL}users/${id}`, 
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
                    window.open(`${process.env.REACT_APP_CLIENT_URL}dashboard`, "_self")
                } else {
                    window.open(`${process.env.REACT_APP_CLIENT_URL}dashboard`, "_self")
                }
            })
            :
            Swal.fire("Something went wrong", "Please try again or contact support", "error")
        } catch (e){
            console.log(e)
        }
    }
}

export function getAvatars(){
    return async function (dispatch){
        try{
            let response = await axios.get(`${process.env.REACT_APP_SERVER_URL}avatar-image`)
            return dispatch({type: "GET_AVATARS", payload: response.data})
        } catch (e){
            console.log(e)
        }
    }
}

export function uploadAvatar(data){
    return async function(){
        try{
            let response = await axios.post(`${process.env.REACT_APP_SERVER_URL}avatar-image`, data)
            if (response.data === "Success") {
                Swal.fire("Avatar upload success", "The image will appears in register form", "success")
                .then(() => {
                    window.open(`${process.env.REACT_APP_CLIENT_URL}dashboard`, "_self")
                })
            } else {
                Swal.fire("Avatar upload issue", "the image could not be loaded", "error")
                .then(() => {
                    window.open(`${process.env.REACT_APP_CLIENT_URL}dashboard`, "_self")
                })
            }
        }catch(e){
            console.log(e)
        }
    }
}

export function changeCurrentPassword(data, token){
    return async function (){
        try {
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}auth/change-password`, 
            data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
             Swal.fire("Password changed successfully!", "Please, log in again with the new password", "success")
                .then(()=> {
                    localStorage.removeItem("token")
                    window.open(`${process.env.REACT_APP_CLIENT_URL}`, "_self")
                })       
            
        } catch (error){
            Swal.fire("Wrong current password. Please try again.","warning")
        }
    }
}

export function getAllAvatars(){
    return async function(dispatch){
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}avatar-image`)
            dispatch({type: "GET_AVATARS", payload: response.data})
        }catch(e){
            console.log(e)
        }
    }
}

export function editCustomer(data, id, token){
    return async function(){
        try{
            const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}customers/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (response.data.email === data.email){
            Swal.fire("Profile edited successfully","", "success")
            .then((result) => {
                if(result.isConfirmed){
                    window.open(`${process.env.REACT_APP_CLIENT_URL}profile/${id}`, "_self")
                }
            })
            } 
        }catch(e){
            console.log(e)
        }
    }
}


export function checkToken(token){
    return async function(){
        try{
            const date = new Date
            const actualTime = Math.ceil(date.getTime()/1000)
            const tokenExp = token.exp
            if (tokenExp < actualTime) {
                localStorage.removeItem("token")
                window.open(`${process.env.REACT_APP_CLIENT_URL}`, "_self")
            } else if (actualTime < tokenExp && actualTime + 900 > tokenExp){
                localStorage.removeItem("token")
                Swal.fire("Your session is expired","Please, log in again", "info")
                window.open(`${process.env.REACT_APP_CLIENT_URL}`, "_self")
            } else {
                return "valid token"
            }
        }catch(e){
            console.log(e)
        }
    }
}