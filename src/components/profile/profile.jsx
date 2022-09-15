import React from 'react'
import decode from 'jwt-decode'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCustomers, getProfile } from '../../redux/actions'
import './Profile.css'


const Profile = () => {
    const dispatch = useDispatch()
    
    const pathLoc = window.location.pathname
    
    const idCustomer = pathLoc.substring(pathLoc.lastIndexOf('/') + 1)
    
    let token = ''
    token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token !== null){
        tokenDecode = decode(token, process.env.REACT_APP_JWT_SECRET)
    }

    useEffect(() => {
        dispatch(getProfile(idCustomer, token))
        dispatch(getAllCustomers())
    },[token]) 
    
    const allCustomers = useSelector((state) => state.customers)
    const customer = useSelector((state) => state.profile)
    
    //Numero de ranking
    function rankOf (data) {
        return allCustomers?.findIndex((p) => p._id === data?._id)+1
    }
    
    console.log(customer)

    return (
        <div className='Profile'>
            <div className='ProfileContainer'>
                <div className='ProfileInfoTop'>
                    <div className='ProfileAvatar'>
                        <img className='ProfileAvatarImg' src={`./images/avatar${customer?.avatar}.png`}/>
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
                                <button className='ProfileDataEditBtn'>EDIT PROFILE</button>
                                <button className='ProfileDataDeleteBtn'>DELETE PROFILE</button>
                            </div>
                        </div>
                        :
                        idCustomer === tokenDecode?.id ?
                        <div className='ProfileDataBtnCont'>
                            <div className='ProfileDataButtons'>
                                <button className='ProfileDataEditBtn'>EDIT PROFILE</button>                            </div>
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
            </div>
        </div>
    )
}

export default Profile