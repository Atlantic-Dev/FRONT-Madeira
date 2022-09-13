import decode from 'jwt-decode'
import React from 'react'
import './dashboard.css'
const {JWT_SECRET} = process.env

const Dashboard = () => {
    
    let token = ''
    token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token !== null){
        tokenDecode = decode(token, JWT_SECRET)
    }
 

    if (tokenDecode !== null && tokenDecode !== undefined && tokenDecode?.type !== "superAdmin"){
        window.open("http://localhost:3001/", "_self")
    }


    return (   
        <div className="Dashboard">
            <div className='DashboardContainer'>
                <button className='DashboardButton'>Change password</button>
                <button className='DashboardButton'>Create a User admin</button>
                <button className='DashboardButton'>Delete a User admin</button>
            </div>
        </div>
    )
    
}

export default Dashboard