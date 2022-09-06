import './login.css'

const Login = () => {
    return (
        <div className="Login">
            <input type="text" placeholder='Username' name='username' className='LoginInputUsername'/>
            <input type="password" placeholder='Password' name='password' className='LoginInputPassword'/>
            <input type="submit" value="LOG IN" className='LoginSubmit'/>
            <span className='LoginOr'>or</span>
            <span className='LoginGoogle'>Login with Google</span>
        </div>
    )
}

export default Login