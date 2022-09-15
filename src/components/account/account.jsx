import decode from 'jwt-decode'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions'
import ChangePassword from '../dashboard/ChangePassword/ChangePassword'
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
                    <span>
                        MY ACCOUNT
                    </span>
                    <span>
                        {user.name}
                    </span>
                    <span>
                        {user.surname}
                    </span>
                    <span>
                        {user.email}
                    </span>
                </div>
                <ChangePassword/>
            </div>
        </div>
    )
}

export default Account