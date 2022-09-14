import decode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions'
import Create from './CreateUser/Create'
import './dashboard.css'
import Delete from './DeleteUser/Delete'
import Password from './ChangePassword/ChangePassword'
const {JWT_SECRET} = process.env

const Dashboard = () => {
    const dispatch = useDispatch()
    const [tab, setTab] = useState("none")

    const openPassword = () => setTab("password")
    const openCreate = () => setTab("create")
    const openDelete =() => setTab("delete")

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    let token = ''
    token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token !== null){
        tokenDecode = decode(token, JWT_SECRET)
    } 

    if (tokenDecode !== null && tokenDecode !== undefined && tokenDecode?.type !== "superAdmin"){
        window.open("http://react-alb-1195746012.us-east-1.elb.amazonaws.com/", "_self")
    }

    const usersList = useSelector((state) => state.users)

    return (   
        <div className="Dashboard">
            <div className='DashboardContainer'>
                <button onClick={openPassword} className='DashboardButtonPassword'>Change password</button>
                <button onClick={openCreate} className='DashboardButtonCreate'>Create a User admin</button>
                <button onClick={openDelete} className='DashboardButtonDelete'>Delete a User admin</button>
                <button onClick={openDelete} className='DashboardButtonAvatars'>Manage avatar images</button>
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
            null
            }
        </div>
    )
    
}

export default Dashboard