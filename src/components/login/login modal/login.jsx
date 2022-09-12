import './login.css';
import { IoCloseCircle } from 'react-icons/io5';
import {useDispatch} from "react-redux";
import { postLogin, setCloseModal } from '../../../redux/actions';
import { useState } from 'react';


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
            <div className='LoginDivClose'>
            <IoCloseCircle className='LoginClose' onClick={handleCloseModal}/>
            </div>
            <form className="LoginForm"
            onSubmit={handleLogin}>
            <input type="email" placeholder='Email' name='email' className='LoginInputEmail' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' className='LoginInputPassword' onChange={handleChange}/>
            <input type="submit" value="LOG IN" className='LoginSubmit'/>
            </form>
            <span className='LoginOr'>or</span>
            <span className='LoginGoogle'>Login with Google</span>
        </div>
    )
}

export default Login