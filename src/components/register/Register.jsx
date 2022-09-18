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

    function validate(input){
        let errors = {};
        let newPasswordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        if(input.nickname && input.nickname.length < 4){
            errors.nickname = 'Minimum 4 characters'
        }
        else if(input.nickname && input.nickname.length > 15 ){
            errors.nickname = 'Maximum 15 characters'
        }
        else if(input.name && input.name.length < 4){
            errors.name = 'Minimum 4 letters'
        }
        else if(input.name && input.name.length > 15 ){
            errors.name = 'Maximum 15 letters'
        }
        else if(input.name && !/^[A-z]+$/.test(input.name)){ 
            errors.name = "Name must contain only letters"
        }
        else if(input.surname && !/^[A-z]+$/.test(input.surname)){ 
            errors.surname = "Surname must contain only letters"
        }
        else if(input.surname && input.surname.length < 4){
            errors.surname = 'Minimum 4 letters'
        }
        else if(input.surname && input.surname.length > 15 ){
            errors.surname = 'Maximum 15 letters'
        }
        else if(input.password && !newPasswordPattern.test(input.password)){
            errors.password= 'Password must contain at least 8 characters, 1 number, 1 capital letter and optional symbol at the end'
        }
        else if(input.passwordCheck && !newPasswordPattern.test(input.passwordCheck)){
            errors.passwordCheck= 'Password must contain at least 8 characters, 1 number, 1 capital letter and optional symbol at the end'
        }
        else if(input.password !== input.passwordCheck){
          errors.passwordCheck = 'The password must match' 
        }
        else if(input.email && !input.email.includes("@") || input.email && !input.email.includes(".")){
            errors.email= 'Enter a valid email'
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

    //Control de información y dispatch de action register
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.nickname || !input.email || !input.password || !input.passwordCheck) Swal.fire("All fields must be filled out","","info")
        else if (errors.nickname) Swal.fire(errors.nickname, "","info")
        else if (errors.email) Swal.fire(errors.email, "","info")
        else if (errors.password) Swal.fire(errors.password, "","info")
        else if (errors.passwordCheck) Swal.fire(errors.passwordCheck, "","info")
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
