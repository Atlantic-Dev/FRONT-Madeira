import React from 'react'
import decode from 'jwt-decode'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer, getAllAvatars, getAllCustomers, getProfile } from '../../redux/actions'
import './Profile.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import ChangePassword from '../dashboard/ChangePassword/ChangePassword'
import EditProfile from './editProfile/EditProfile'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [modalEdit, setModalEdit] = useState(false)
    const [modalPassword, setModalPassword] = useState(false)

    const pathLoc = window.location.pathname
    const idCustomer = pathLoc.substring(pathLoc.lastIndexOf('/') + 1)
    
    const token = localStorage.getItem("token")
    
    let tokenDecode = {}

    if (token !== null){
        tokenDecode = decode(token, process.env.REACT_APP_JWT_SECRET)
    }

    useEffect(()=>{
        dispatch(getAllCustomers())
        dispatch(getAllAvatars())
    },[])

    useEffect(() => {
        dispatch(getProfile(idCustomer, token))
    },[token]) 
    
    const allCustomers = useSelector((state) => state.customers)
    const customer = useSelector((state) => state.profile)
    const allAvatars = useSelector((state) => state.avatars)

    function openEdit(e){
        e.preventDefault()
        setModalEdit(true)
    }
    function closeEdit(e){
        e.preventDefault()
        setModalEdit(false)
    }

    function openPassword(e){
        e.preventDefault()
        setModalPassword(true)
    }
    function closePassword(e){
        e.preventDefault()
        setModalPassword(false)
    }
    
    function handleDelete(customer){
        Swal.fire({
            title: "Are you sure?", 
            text: `The account of ${customer.email} will be disabled`, 
            showCancelButton: true,
            confirmButtonText: "Sure",
            cancelButtonText: "No, cancel!",
            icon: "warning"})
        .then((result) => {
            if (result.isConfirmed){
                dispatch(deleteCustomer(customer._id, token))
            }
        })
    }

    //Numero de ranking
    function rankOf (data) {
        return allCustomers?.findIndex((p) => p._id === data?._id)+1
    }
    return (
        <div className='Profile'>
            <div className='ProfileContainer'>
                <div className='ProfileInfoTop'>
                    <div className='ProfileAvatar'>
                        <img className='ProfileAvatarImg' src={allAvatars[customer.avatar - 1]?.imageUrl}/>
                    </div>
                    <div className='ProfileData'>
                        <div className='ProfileDataTitle'>
                            <h1>{customer?.nickname}</h1>
                        </div>
                        <div className='ProfileDataContent'>
                            <div className='ProfileDataContentTop'>
                                <h2>{customer?.name} {customer?.surname}</h2>
                                <h3 className='ProfileDataContentID'>ID {customer?._id}</h3>
                            </div>
                            <div className='ProfileDataContentBottom'>
                                <h3 className='ProfileDataContentStatus'>{customer?.status}</h3>
                                <h3 className='ProfileDataContentRank'>Rank #{rankOf(customer)}</h3>
                                <h3 className='ProfileDataContentPoints'>{customer?.totalPoints} LP</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {
                        tokenDecode?.type === "user" || tokenDecode?.type === "superAdmin" ?
                        <div className='ProfileDataBtnCont'>
                            <div className='ProfileDataButtons'>
                                <button onClick={openEdit} className='ProfileDataEditBtn'>EDIT PROFILE</button>
                                <button onClick={() => handleDelete(customer)} className='ProfileDataDeleteBtn'>DELETE PROFILE</button>
                            </div>
                        </div>
                        :
                        idCustomer === tokenDecode?.id ?
                        <div className='ProfileDataBtnCont'>
                            <div className='ProfileDataButtons'>
                                <button onClick={openEdit} className='ProfileDataEditBtn'>EDIT PROFILE</button>
                                <button onClick={openPassword} className='ProfileDataPasswordBtn'>EDIT PASSWORD</button>
                            </div>
                        </div>
                        :
                        null
                        }
                <div className='ProfileInfoBottom'>
                    <div className='ProfileInfoBottomTitle'>
                        <h3>Total matchs</h3>
                        <h3>Total wins</h3>
                        <h3>Winrate</h3>
                    </div>
                    <div className='ProfileInfoBottomData'>
                        <h3>{customer?.totalGames}</h3>
                        <h3>{customer?.totalWins}</h3>
                        <h3>{customer?.totalGames !== 0 ? Math.round((customer?.totalWins / customer?.totalGames ) * 100) : 0}%</h3>
                    </div>
                </div> 
                {modalEdit === true ?
                    <div onClick={closeEdit} className='ProfileModalBackground'>
                    </div>
                    : 
                    null
                }
                {modalEdit === true ?
                    <div className='ProfileModalEdit'>
                        <EditProfile  customer={customer}/>
                    </div>
                : 
                null
                }
                {modalPassword === true ?
                    <div onClick={closePassword} className='ProfileModalBackground'>
                    </div>
                    : 
                    null
                }
                {modalPassword === true ?
                    <div className='ProfileModalPassword'>
                        <ChangePassword/>
                    </div> 
                    : 
                    null
                }
            </div>
        </div>
    )
}

export default Profile
