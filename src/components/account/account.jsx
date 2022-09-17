import decode from 'jwt-decode'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions'
import ChangePassword from '../Dashboard/ChangePassword/ChangePassword'
import './Account.css'

const Account = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token) {
        tokenDecode = decode(token)
    }

    useEffect(() => {
        dispatch(getUser(tokenDecode?.id, token))
    })

    const user = useSelector((state) => state.profile)
    
    return (
        <div className='Account'>
            <div className='AccountContainer'>
                <div className='AccountData'>
                    <span className='AccountDataTitle'>
                        Account data
                    </span>
                    <div className='AccountDataTextContent'>
                        <span className='AccountDataText'>
                            {user.name} {user.surname} 
                        </span>
                        <span className='AccountDataText'>
                            {user.email}
                        </span>
                    </div>
                </div>
                    <span className='AccountPasswordTitle'>
                        Want to change your password?
                    </span>
                <ChangePassword />
            </div>
        </div>
    )
}

export default Account