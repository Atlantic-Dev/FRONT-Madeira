import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { changeCurrentPassword } from '../../../redux/actions';

const ChangePassword = () => {
    
    const token = localStorage.getItem('token')
    let tokenDecoded = {}
    if (token) {
        tokenDecoded = decode(token)
    }

    const dispatch = useDispatch()

    const [ customer, setCustomer ] = useState({
        oldPassword: '',
        newPassword:'',
        newPasswordRepeat:''
    })

    const [ user, setUser ] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordRepeat:''
    })

    const [ error, setError ] = useState({
        newPassword: "", 
        confirmPassword: ""
    })

    const sendChange = () => {
            dispatch(changeCurrentPassword(customer, token))
    }

    const handleChange = (e) => {
        e.preventDefault()
    if (error.newPassword !== "" || error.confirmPassword !== ""){
        Swal.fire({
            icon: 'error',
            title: 'An error has occurred',
            text:'The password must be between 8 and 16 characters long, and must contain at least 1 uppercase, 1 lowercase and 1 number'
        })}else{
            sendChange()
        }
    }

   
    const handleInputChange = (e) => {
        e.preventDefault()
        const value = e.target.value;
        const name = e.target.name;
        
        
        switch (name) {
            case "newPassword":
            let newPasswordPattern =
              /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            error.newPassword = newPasswordPattern.test(value)
              ? ""
              : "The password must be between 8 and 16 characters long, and must contain at least 1 uppercase, 1 lowercase and 1 number";
            break;
          case "confirmPassword":
              let confirmPasswordPattern =
              /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
              error.confirmPassword = confirmPasswordPattern.test(value)
              ? value !== user.newPassword
              ? "Passwords do not match"
              : ""
              : "Passwords do not match";
            break;
        } 
        
        setError(error) 

        // 
        if(tokenDecoded.type === 'customer'){
            setCustomer({ ...customer, [name]: value });
        } else if(tokenDecoded.type === 'user'){
            setUser({ ...user, [name]: value })
        }
    }


    return (
        <div className='DashboardTab'>
            <form className="DashboardForm">
                <input 
                    className='DashboardFormInput' 
                    type='password'
                    name='oldPassword'
                    onChange={handleInputChange}
                    placeholder='Current password'
                />
                <input 
                    className='DashboardFormInput' 
                    type='password' 
                    name='newPassword'
                    onChange={handleInputChange}
                    placeholder='New password'
                />
                <input 
                    className='DashboardFormInput' 
                    type='password' 
                    name='newPasswordRepeat'
                    onChange={handleInputChange}
                    placeholder='Repeat new password'
                />
                <input 
                    className='DashboardFormSubmitPassword' 
                    type='submit'
                    name='submit change password'
                    onClick={handleChange}
                    value='Change'
                />
            </form>
        </div>
    )
}

export default ChangePassword