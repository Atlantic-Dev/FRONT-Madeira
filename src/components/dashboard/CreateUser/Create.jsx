import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../../redux/actions'

const Create = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const [input, setInput] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordCheck: "",
        type: "user",
        isActive: true
    })
    
    const [errors, setErrors] = useState({})

    function validate (input){
        let errors = {};
        if(input.name === ""){
            errors.name = 'The name field is required'
        }
        else if(input.name.length < 4){
            errors.name = 'Minimum 4 letters'
        }
        else if(input.name.length > 15 ){
            errors.name = 'Maximum 15 letters'
        }
        else if(input.surname === ""){
            errors.surname = 'The surname field is required'
        }
        else if(input.surname.length < 4){
            errors.surname = 'Minimum 4 letters'
        }
        else if(input.surname.length > 15 ){
            errors.surname = 'Maximum 15 letters'
        }   
        else if(!input.email){
            errors.email = 'The email field is required'
        }
        else if(!input.email.includes("@") || !input.email.includes(".")){
            errors.email= 'Enter a valid email'
          }
        else if(!input.password){
          errors.password = 'The password field is required'
        }
        else if(!input.passwordCheck){
          errors.passwordCheck = 'The password field is required'
        }
        else if(input.password !== input.passwordCheck){
          errors.passwordCheck = 'The password must match' 
        }
        return errors
      }

    //State changes and text input errors verification
    function handleChange(e) {
        setInput({
           ...input,
           [e.target.name]: e.target.value
       })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    
    // Information control and register action dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.email || !input.name || !input.surname || !input.password || !input.passwordCheck) alert("Input cannot be an empty value")
        else if (errors.email) alert(errors.email)
        else if (errors.name) alert(errors.name)
        else if (errors.surname) alert(errors.surname)
        else if (errors.password) alert(errors.password)
        else if (errors.passwordCheck) alert(errors.passwordCheck)
        else if (errors.avatar) alert(errors.avatar)
        else {
            dispatch(registerUser(input, token))
            setInput({
                name: "",
                surname: "",
                email: "",
                password: "",
                type: "user",
                isActive: true
            })   
        }
    } 

    return (
        <div className='DashboardTab'>
            <form className="DashboardForm">
                <input 
                className="DashboardFormInput"
                type="email" 
                name='email' 
                placeholder='Email'
                value={input.email}
                onChange={(e) => handleChange(e)}
                />
                                    {
                        errors.email && (
                            <p className='ErrorText'>{errors.email}</p>
                        )
                    }
                <input 
                className="DashboardFormInput"
                type="text" 
                name='name' 
                placeholder='Name'
                value={input.name}
                onChange={(e) => handleChange(e) }/>
                                    {
                        errors.name && (
                            <p className='ErrorText'>{errors.name}</p>
                        )
                    }
                <input 
                className="DashboardFormInput"
                type="text" 
                name='surname' 
                placeholder='Surname'
                value={input.surname}
                onChange={(e) => handleChange(e) }/>
                                    {
                        errors.surname && (
                            <p className='ErrorText'>{errors.surname}</p>
                        )
                    }
                <input 
                className="DashboardFormInput"
                type="password" 
                name='password' 
                placeholder='Password'
                value={input.password}
                onChange={(e) => handleChange(e)}/>
                                                    {
                        errors.password && (
                            <p className='ErrorText'>{errors.password}</p>
                        )
                    }
                <input 
                className="DashboardFormInput"
                type="password" 
                name='passwordCheck' 
                placeholder='Repeat password'
                value={input.passwordCheck}
                onChange={(e) => handleChange(e)}/>
                                    {
                        errors.passwordCheck && (
                            <p className='ErrorText'>{errors.passwordCheck}</p>
                        )
                    }
                <button 
                data-testid="DashboardFormSubmitCreate"
                className='DashboardFormSubmitCreate'
                type='submit'
                onClick={handleSubmit}
                >Create</button>
            </form>
        </div>
    )
}

export default Create