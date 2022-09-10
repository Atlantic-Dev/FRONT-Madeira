import './register.css'
import { useState } from 'react'
import { registerCustomer } from '../../redux/actions'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        nickname: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordCheck: "",
        avatar: "0",
    })
    
    const [errors, setErrors] = useState({})

    function validate (input){
        let errors = {};
        if(!input.nickname){
            errors.nickname = 'The nickname field is required'
        }
        else if(input.nickname.length < 4){
            errors.nickname = 'Minimum 4 letters'
        }
        else if(input.nickname.length > 15 ){
            errors.nickname = 'Maximum 15 letters'
        }
        else if(input.name === ""){
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
        else if(!input.email.includes("@")){
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
        else if(input.avatar === '0') {
            errors.avatar = "Avatar is required"
        }
        return errors
      }

    //Cambios de estado y verificacion de errores de inputs Text
    function handleChange(e) {
        setInput({
           ...input,
           [e.target.name]: e.target.value
       })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    //Cambios de estado y verificacion de errores de select avatar
    const handleSelect = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            avatar: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    //Control de información y dispatch de action register
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.nickname || !input.email || !input.password || !input.passwordCheck || input.avatar === '0') alert("Input cannot be an empty value")
        else if (errors.nickname) alert(errors.nickname)
        else if (errors.email) alert(errors.email)
        else if (errors.password) alert(errors.password)
        else if (errors.passwordCheck) alert(errors.passwordCheck)
        else if (errors.avatar) alert(errors.avatar)
        else {
            dispatch(registerCustomer(input))
            setInput({
                nickname: "",
                name: "",
                surname: "",
                email: "",
                password: "",
                passwordCheck: "",
                avatar: "0",
            })
            Swal.fire("User created successfully","You can now login", "success")
            .then((result) => {
                if(result.isConfirmed){
                    navigate('/', {replace: true})
                }
            })            
        }
    } 

    return(
        <div className="Register">
            <form className="RegisterForm">
                <input type="text" 
                className="inputUser"
                name='nickname' 
                placeholder='Nickname'
                value={input.nickname}
                onChange={(e) => handleChange(e) }/>
                                    {
                        errors.username && (
                            <p className='ErrorText'>{errors.username}</p>
                        )
                    }
                <input type="text" 
                name='name' 
                placeholder='Name'
                value={input.name}
                onChange={(e) => handleChange(e) }/>
                                    {
                        errors.name && (
                            <p className='ErrorText'>{errors.name}</p>
                        )
                    }
                <input type="text" 
                name='surname' 
                placeholder='Surname'
                value={input.surname}
                onChange={(e) => handleChange(e) }/>
                                    {
                        errors.lastname && (
                            <p className='ErrorText'>{errors.lastname}</p>
                        )
                    }
                <input type="email" 
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
                <input type="password" 
                name='password' 
                placeholder='Password'
                value={input.password}
                onChange={(e) => handleChange(e)}/>
                                                    {
                        errors.password && (
                            <p className='ErrorText'>{errors.password}</p>
                        )
                    }
                <input type="password" 
                name='passwordCheck' 
                placeholder='Repeat password'
                value={input.passwordCheck}
                onChange={(e) => handleChange(e)}/>
                                    {
                        errors.passwordCheck && (
                            <p className='ErrorText'>{errors.passwordCheck}</p>
                        )
                    }
                <select className='RegisterSelect' onChange={handleSelect} name="avatar">
                    <option value='hidden' hidden>Select Avatar</option>
                    <option className='RegisterOptionAvatar1' value="1">Avatar1</option>
                    <option className='RegisterOptionAvatar2' value="2">Avatar2</option>
                    <option className='RegisterOptionAvatar3' value="3">Avatar3</option>
                    <option className='RegisterOptionAvatar4' value="4">Avatar4</option>
                    <option className='RegisterOptionAvatar5' value="5">Avatar5</option>
                    <option className='RegisterOptionAvatar6' value="6">Avatar6</option>
                    <option className='RegisterOptionAvatar7' value="7">Avatar7</option>
                </select>
                <button className='ButtonSubmit'
                type='submit'
                onClick={handleSubmit}
                >Create user</button>
            </form>
        </div>
    )
}

export default Register