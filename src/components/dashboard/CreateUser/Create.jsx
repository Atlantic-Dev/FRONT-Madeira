import React from 'react'

const Create = () => {
    return (
        <div className='DashboardTab'>
            <form className='DashboardForm'>
                <input className='DashboardFormInput' type="email" placeholder='Email'/>
                <input className='DashboardFormInput' type="text" placeholder='Name'/>
                <input className='DashboardFormInput' type="text" placeholder='Surname'/>
                <input className='DashboardFormInput' type="password" placeholder='Password'/>
                <input className='DashboardFormInput' type="password" placeholder='Repeat password'/>
                <input className='DashboardFormSubmitCreate' type="submit" value="Create"/>
            </form>
        </div>
    )
}

export default Create