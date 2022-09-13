import React from 'react'

const Password = () => {
    return (
        <div className='DashboardTab'>
            <form className="DashboardForm">
                <input className='DashboardFormInput' type="password" placeholder='Current password'/>
                <input className='DashboardFormInput' type="password" placeholder='New password'/>
                <input className='DashboardFormInput' type="password" placeholder='Repeat new password'/>
                <input className='DashboardFormSubmitPassword' type="submit" value="Change"/>
            </form>
        </div>
    )
}

export default Password