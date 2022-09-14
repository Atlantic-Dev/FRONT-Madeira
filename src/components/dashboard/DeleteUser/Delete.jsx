import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../redux/actions'

const Delete = (props) => {
    const usersList = props.users

    const dispatch = useDispatch()

    const token = localStorage.getItem("token")

    function isEven(n) {
        return n % 2
    }

    function handleDelete(id, token){
        console.log("entra??")
        dispatch(deleteUser(id, token))
    }
    
    return (
        <div className='DashboardDelete'>
            {usersList.map((user, index) => {
                return (
                    isEven(index) === 0 ?
                    <div className='DashboardUserEven'>
                        <span className='DashboardUserData' >
                            {user.name}
                        </span>
                        <span className='DashboardUserData' >
                            {user.surname}
                        </span>
                        <span className='DashboardUserData' >
                            {user.email}
                        </span>
                        <button onClick={() => handleDelete(user._id, token)} className='DashboardFormSubmitDelete'>
                            Delete
                        </button>
                    </div>
                    :
                    <div className='DashboardUserOdd'>
                        <span className='DashboardUserData' >
                            {user.name}
                        </span>
                        <span className='DashboardUserData' >
                            {user.surname}
                        </span>
                        <span className='DashboardUserData' >
                            {user.email}
                        </span>
                        <button onClick={handleDelete(user._id, token)} className='DashboardFormSubmitDelete'>
                            Delete
                        </button>
                    </div>
                )

            })

            }
        </div>
    )
}

export default Delete