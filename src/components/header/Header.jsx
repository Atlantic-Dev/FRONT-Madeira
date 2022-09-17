import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { setCloseModal, setOpenModal } from '../../redux/actions';
import Login from '../Login/Login';
import './Header.css';
import decode from 'jwt-decode';

let pathLoc = window.location.pathname 

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const modal = useSelector((state) => state.openModal)

    let token = ''
    token = localStorage.getItem("token")
    let tokenDecode = {}
    if (token !== null){
        tokenDecode = decode(token, process.env.REACT_APP_JWT_SECRET)
    }

    function handleOpenModal(e) {
        e.preventDefault(e)
        dispatch(setOpenModal())
    }

    function handleCloseModal(e) {
        e.preventDefault(e)
        dispatch(setCloseModal())
    }

    function handleLogOut(e){
        e.preventDefault(e)
        localStorage.removeItem("token")
        Swal.fire("Session closed", "", "success")
        .then((response) => {
            if (response.isConfirmed){
                navigate("/");
                pathLoc = "/"
            } else {
                navigate("/");
                pathLoc = "/"
            }
        })
    }

    return (
        <header className="Header">
            <div className="Header">
                <div className='HeaderButtonDiv'>
                    <a href='/' className={ pathLoc === '/' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    HOME
                    </a>
                </div>
                <div className='HeaderButtonDiv'>               
                    <a data-test-id='HeaderButtonList' /* id={'HeaderButtonList'} */ href='/list' className={ pathLoc === '/list' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PLAYERS LIST
                    </a>
                </div>
                <div className='HeaderButtonDiv'>
                    <a href='/about' className={ pathLoc === '/about' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    ABOUT
                    </a>
                </div>
                {
                tokenDecode && tokenDecode?.type === "superAdmin" 
                ?
                <div className='HeaderButtonDiv'>
                    <a href='/dashboard' className={ pathLoc === '/dashboard' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    DASHBOARD
                    </a> 
                </div>  
                :
                tokenDecode && tokenDecode?.type === "user" 
                ?
                <div className='HeaderButtonDiv'>
                    <a href='/account' className={ pathLoc === '/account' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    ACCOUNT
                    </a> 
                </div>  
                :
                token !== null
                ?  
                <div className='HeaderButtonDiv'>
                    <a href={`/profile/${tokenDecode.id}`} className={ pathLoc === '/profile' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PROFILE
                    </a> 
                </div>
                :    
                <div className='HeaderButtonDiv'>
                    <a href='/register' className={ pathLoc === '/register' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    REGISTER
                    </a> 
                </div>
                }
                {
                token !== null
                ?  
                <div className='HeaderButtonDiv'>
                    <a className="HeaderButton" onClick={handleLogOut}>LOG OUT</a>
                </div>
                :
                <div className='HeaderButtonDiv'>
                    <a onClick={modal === true ? handleCloseModal : handleOpenModal} className={modal === true ? "HeaderButtonSelected" : 'HeaderButton'}>LOG IN</a>
                </div>
                }
            </div>
            {modal === true ? 
            <div className='HeaderShadow' onClick={handleCloseModal}/>
            : null}
            {modal === true ?
                <div className='HeaderModalLogin'>
                    <Login close={handleCloseModal} />
                </div> : null
            }
        </header>
    )
}

export default Header
