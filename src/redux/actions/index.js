import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function getAllCustomers(){
    return async function (dispatch){
        try{
            let response = await axios.get('http://madeiraserverapi-env.eba-cjbtjpjz.us-east-1.elasticbeanstalk.com/customers')
            return dispatch({type: 'GET_ALL', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    } 
}
export function searchCustomers(string){
    return async function (dispatch){
        try{
            let response = await axios.get(`http://madeiraserverapi-env.eba-cjbtjpjz.us-east-1.elasticbeanstalk.com/customers/search/${string}`)
            return dispatch({type: 'SEARCH', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    } 
}

export function registerCustomer(input){
    return async function(dispatch){
        try{
        let response = await axios.post('http://madeiraserverapi-env.eba-cjbtjpjz.us-east-1.elasticbeanstalk.com/customers/sign-up', input)
        return dispatch({type: 'CREATE', payload: response.data})
        } catch (e) {
            console.log(e)
        }
    }
}
export function postLogin(user) {
    return async function() {
        try {
            let response = await axios.post("http://madeiraserverapi-env.eba-cjbtjpjz.us-east-1.elasticbeanstalk.com/auth/sign-in", user)
            localStorage.setItem("token", response.data.accessToken)
            /* window.location.reload() */
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

export function getProfile(id){
    return async function (dispatch){
        try{
            let response = await axios.get(`http://madeiraserverapi-env.eba-cjbtjpjz.us-east-1.elasticbeanstalk.com/customers/search/${id}`)
            dispatch({type: "CUSTOMER_PROFILE", payload: response.data})
        }catch (e){
            console.log("This ID doesn't match any customer")
        }
    }

}