import './header.css'

const pathLoc = window.location.pathname

const Header = () => {  
    return (
        <div className="Header">
            <div className='HeaderButtonDiv'>
               { pathLoc === '/' ? 
               <a href='/' className="HeaderButtonSelected">
                HOME
               </a> : 
               <a href='/' className="HeaderButton">
                HOME
               </a> }
            </div>
            <div className='HeaderButtonDiv'>
               { pathLoc === '/list' ? 
               <a href='/list' className="HeaderButtonSelected">
                PLAYERS LIST
               </a> : 
               <a href='/list' className="HeaderButton">
                PLAYERS LIST
               </a> }
            </div>
            <div className='HeaderButtonDiv'>
               { pathLoc === '/about' ? 
               <a href='/about' className="HeaderButtonSelected">
                ABOUT
               </a> : 
               <a href='/about' className="HeaderButton">
                ABOUT
               </a> }
            </div>
            <div className='HeaderButtonDiv'>
               { pathLoc === '/profile' ? 
               <a href='/profile' className="HeaderButtonSelected">
                PROFILE
               </a> : 
               <a href='/profile' className="HeaderButton">
                PROFILE
               </a> }
            </div>
            <div className='HeaderButtonDiv'>
                <a className="HeaderButton">LOG OUT</a>
            </div>
        </div>
    )
}

export default Header