import './register.css'
import { useState } from 'react'

const Register = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
        avatar: "0",
    })
    
    const [errors, setErrors] = useState({})

    function validate (input){
        let errors = {}
        if(!input.username){
          errors.username = 'The username field is required'
        }
        else if(input.username.length < 4){
            errors.username = 'Minimum 4 letters'
        }
        else if(input.username.length > 10 ){
            errors.username = 'Maximum 10 letters'
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
          errors.password = 'The password must match' 
        }
        else if(input.avatar === '0') {
            errors.avatar = "Avatar is required"
        }
        return errors
      }

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

    const handleSelect = (e) => {
        e.preventDefault()
        setInput({
            ...input,
            avatar: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.username || !input.email || !input.password || !input.passwordCheck || input.avatar === '0') alert("Input cannot be an empty value")
        else if (errors.username) alert(errors.username)
        else if (errors.email) alert(errors.email)
        else if (errors.password) alert(errors.password)
        else if (errors.passwordCheck) alert(errors.passwordCheck)
        else if (errors.avatar) alert(errors.avatar)
        console.log('EH¡¡¡???')
    } 
    // alert("User created successfully")
    // setInput({
    //     username: "",
    //     email: "",
    //     password: "",
    //     passwordCheck: "",
    //     avatar: "",
    // })

    return(
        <div className="Register">
            <form className="RegisterForm">
                <input type="text" 
                name='username' 
                placeholder='Username'
                value={input.username}
                onChange={(e) => handleChange(e) }/>
                <input type="email" 
                name='email' 
                placeholder='Email'
                value={input.email}
                onChange={(e) => handleChange(e) }
                />
                <input type="password" 
                name='password' 
                placeholder='Password'
                value={input.password}
                onChange={(e) => handleChange(e) }/>
                <input type="password" 
                name='passwordCheck' 
                placeholder='Repeat password'
                value={input.passwordCheck}
                onChange={(e) => handleChange(e) }/>
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