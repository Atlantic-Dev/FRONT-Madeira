import decode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions'
import AvatarUpload from './AvatarUpload/AvatarUpload'
import Create from './CreateUser/Create'
import './Dashboard.css'
import Delete from './DeleteUser/Delete'
import Password from './ChangePassword/ChangePassword'

const Dashboard = () => {
    const dispatch = useDispatch()
    const [tab, setTab] = useState("none")

    const openPassword = () => setTab("password")
    const openCreate = () => setTab("create")
    const openDelete =() => setTab("delete")
    const openAvatar = () => setTab("avatar")

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    
    let token = ''
    token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token !== null){
        tokenDecode = decode(token, process.env.REACT_APP_JWT_SECRET)
    } 

    if (tokenDecode !== null && tokenDecode !== undefined && tokenDecode?.type !== "superAdmin"){
        window.open(`${process.env.REACT_APP_CLIENT_URL}`, "_self")
    }

    const usersList = useSelector((state) => state.users)

    return (   
        <div className="Dashboard">
            <div className='DashboardContainer'>
                <button onClick={openPassword} className='DashboardButtonPassword'>Change password</button>
                <button onClick={openCreate} className='DashboardButtonCreate'>Create a User admin</button>
                <button onClick={openDelete} className='DashboardButtonDelete'>Delete a User admin</button>
                <button onClick={openAvatar} className='DashboardButtonAvatars'>Manage avatar images</button>
            </div>
            { tab === "none" 
            ?
            null
            :
            tab === "password"
            ?
            <Password/>
            :
            tab === "create"
            ?
            <Create/>
            :
            tab === "delete"
            ?
            <Delete users={usersList}/>
            :
            tab === "avatar"
            ?
            <AvatarUpload/>
            :
            null
            }
        </div>
    )
    
}

export default Dashboard