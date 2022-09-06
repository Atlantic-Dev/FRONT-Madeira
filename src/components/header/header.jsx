import { useState } from 'react';
import Login from '../login/login modal/login';
import './header.css'

const pathLoc = window.location.pathname

const Header = () => {

    const [openModal, setOpenModal] = useState(false);

    function handleOpen() {
        console.log("open")
        setOpenModal(true)
    }

    function handleClose() {
        console.log("close")
        setOpenModal(false)
    }
    
    return (
        <header className="Header">
            <div className="Header">
                <div className='HeaderButtonDiv'>
                    <a href='/' className={ pathLoc === '/' && openModal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    HOME
                    </a>
                </div>
                <div className='HeaderButtonDiv'>               
                    <a href='/list' className={ pathLoc === '/list' && openModal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PLAYERS LIST
                    </a>
                </div>
                <div className='HeaderButtonDiv'>
                    <a href='/about' className={ pathLoc === '/about' && openModal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    ABOUT
                    </a>
                </div>
                <div className='HeaderButtonDiv'>
                    <a href='/profile' className={ pathLoc === '/profile' && openModal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PROFILE
                    </a> 
                </div>
                {/* <div className='HeaderButtonDiv'>
                    <a className="HeaderButton">LOG OUT</a>
                </div> */}
                <div className='HeaderButtonDiv'>
                    <a onClick={openModal === true ? handleClose : handleOpen} className={openModal === true ? "HeaderButtonSelected" : 'HeaderButton'}>LOG IN</a>
                </div>
            </div>
            {openModal ? 
            <div className='HeaderShadow' onClick={handleClose}/>
            : null}
            {openModal ?
                <div className='HeaderModalLogin'>
                    <Login close={handleClose} />
                </div> : null
            }
        </header>
    )
}

export default Header