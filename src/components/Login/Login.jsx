import './Login.css';
import { IoCloseCircle } from 'react-icons/io5';
import {useDispatch} from "react-redux";
import { postLogin, setCloseModal } from '../../redux/actions';
import { useState } from 'react';
import logo from "../../images/Banner.png"


const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const dispatch = useDispatch()

    function handleLogin(e) {
        e.preventDefault(e);
        dispatch(postLogin(input))
    }

    function handleChange(e) {
        e.preventDefault(e);
        setInput({...input, [e.target.name]: e.target.value })
    }

    function handleCloseModal(e) {
        e.preventDefault(e)
        dispatch(setCloseModal())
    }

    return (
        <div className="Login">
            <IoCloseCircle className='LoginClose' onClick={handleCloseModal}/>
            <div className='LoginDivClose'>
            <img src={logo} alt="logo" className='LoginModalLogo'></img>
            </div>
            <form className="LoginForm"
            onSubmit={handleLogin}>
            <input type="email" placeholder='Email' name='email' className='LoginInputEmail' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' className='LoginInputPassword' onChange={handleChange}/>
            <input type="submit" value="Log in" className='LoginSubmit'/>
            </form>
        </div>
    )
}

export default Login