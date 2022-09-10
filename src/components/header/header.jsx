import { useDispatch, useSelector } from 'react-redux';
import { setCloseModal, setOpenModal } from '../../redux/actions';
import Login from '../login/login modal/login';
import './header.css'

const pathLoc = window.location.pathname 

const Header = () => {

    const dispatch = useDispatch()
    const modal = useSelector((state) => state.openModal)

    function handleOpenModal(e) {
        e.preventDefault(e)
        dispatch(setOpenModal())
    }

    function handleCloseModal(e) {
        e.preventDefault(e)
        dispatch(setCloseModal())
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
                    <a href='/list' className={ pathLoc === '/list' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PLAYERS LIST
                    </a>
                </div>
                <div className='HeaderButtonDiv'>
                    <a href='/about' className={ pathLoc === '/about' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    ABOUT
                    </a>
                </div>{/* 
                <div className='HeaderButtonDiv'>
                    <a href='/profile' className={ pathLoc === '/profile' && openModal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    PROFILE
                    </a> 
                </div> */}
                <div className='HeaderButtonDiv'>
                    <a href='/register' className={ pathLoc === '/register' && modal===false ? "HeaderButtonSelected" : "HeaderButton"}>
                    REGISTER
                    </a> 
                </div>
                {/* <div className='HeaderButtonDiv'>
                    <a className="HeaderButton">LOG OUT</a>
                </div> */}
                <div className='HeaderButtonDiv'>
                    <a onClick={modal === true ? handleCloseModal : handleOpenModal} className={modal === true ? "HeaderButtonSelected" : 'HeaderButton'}>LOG IN</a>
                </div>
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