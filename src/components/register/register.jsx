import './Register.css'
import React from 'react'
import { useState } from 'react'
import { getAllAvatars, registerCustomer, setOpenModal } from '../../redux/actions'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllAvatars())
    },[])

    const allAvatars = useSelector((state) => state.avatars)

    const [input, setInput] = useState({
        nickname: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordCheck: "",
        avatar: 1,
    })
    console.log(input)

    const [modalAvatar, setModalAvatar] = useState(false)
    
    function setAvatar(id){
        setInput({
            ...input,
            avatar: id
        })
        setModalAvatar(false)
    }

    function openAvatar(e){
        e.preventDefault()
        setModalAvatar(true)
    }

    function closeAvatar(e){
        e.preventDefault()
        setModalAvatar(false)
    }

    const [errors, setErrors] = useState({})

    function validate (input){
        let errors = {};
        if(!input.nickname){
            errors.nickname = 'The nickname field is required'
        }
        else if(input.nickname.length < 4){
            errors.nickname = 'Minimum 4 characters'
        }
        else if(input.nickname.length > 15 ){
            errors.nickname = 'Maximum 15 characters'
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
                avatar: "1",
            })
            Swal.fire("User created successfully","You can now login", "success")
            .then((result) => {
                if(result.isConfirmed){
                    navigate('/', {replace: true})
                }
            })            
        }
    } 

    //Open modal para el boton de already have an account
    
    function handleOpenModal(e) {
        e.preventDefault(e)
        dispatch(setOpenModal())
    }

    return(
        <div className="Register">
                <span className='RegisterLogin'>Do you already have an account? <button onClick={handleOpenModal} className='RegisterLoginButton'>Log in here!</button></span>
                <form className="RegisterForm">
                    <input type="text" 
                    className="inputUser"
                    name='nickname' 
                    placeholder='Nickname'
                    value={input.nickname}
                    onChange={(e) => handleChange(e) }/>
                                        {
                            errors.nickname && (
                                <p className='ErrorText'>{errors.nickname}</p>
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
                            errors.surname && (
                                <p className='ErrorText'>{errors.surname}</p>
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
                    <button className='RegisterAvatarButton' 
                    onClick={openAvatar} 
                    name="avatar">
                        Select an avatar
                    </button>
                    <img className='RegisterAvatarSelected' src={allAvatars[input.avatar -1]?.imageUrl}/>
                    <button className='RegisterButtonSubmit'
                    type='submit'
                    onClick={handleSubmit}>
                        Create user
                    </button>
                </form>
                {modalAvatar === true ?
                        <div onClick={closeAvatar} className='AvatarModalBackground'>
                        </div>
                        : 
                        null
                    }
                {modalAvatar === true ?
                    <div className='AvatarModalContainer'>
                        <button onClick={closeAvatar} className="AvatarModalCloseButton">X</button>
                        {allAvatars.map((avatar) => {
                            return (
                            <button className={input.avatar === avatar.idNumber ? "AvatarModalButtonSelected" :'AvatarModalButton'} onClick={() => setAvatar(avatar.idNumber)}>
                                <img className="AvatarModalImage" src={avatar.imageUrl}/>
                            </button>)
                        })}
                    </div>
                    : 
                    null
                }
        </div>
    )
}

export default Register