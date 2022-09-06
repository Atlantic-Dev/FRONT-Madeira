import './register.css'
import { useState } from 'react'
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.png'
import avatar4 from '../../images/avatar4.png'
import avatar5 from '../../images/avatar5.png'
import avatar6 from '../../images/avatar6.png'
import avatar7 from '../../images/avatar7.png'

const Register = () => {
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        avatar: ''
    })

    return(
        <div className="Register">
            <form className="RegisterForm">
                <input type="text" name='username' placeholder='Username'/>
                <input type="email" name='email' placeholder='Email'/>
                <input type="password" name='password' placeholder='Password'/>
                <input type="password" name='passwordCheck' placeholder='Repeat password'/>
                <select className='RegisterSelect' name="avatar">
                    <option value='hidden' hidden>Select Avatar</option>
                    <option className='RegisterOptionAvatar1' value="">Avatar1</option>
                    <option className='RegisterOptionAvatar2' value="">Avatar2</option>
                    <option className='RegisterOptionAvatar3' value="">Avatar3</option>
                    <option className='RegisterOptionAvatar4' value="">Avatar4</option>
                    <option className='RegisterOptionAvatar5' value="">Avatar5</option>
                    <option className='RegisterOptionAvatar6' value="">Avatar6</option>
                    <option className='RegisterOptionAvatar7' value="">Avatar7</option>
                </select>
            </form>
        </div>
    )
}

export default Register