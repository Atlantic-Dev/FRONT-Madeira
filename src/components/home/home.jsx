import './home.css'
import HallOfFame from '../halloffame/hallOfFame'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCustomers } from '../../redux/actions'
import { useEffect } from 'react'

const Home = () => {

    return (
    <div className="Home">
        <div className="HomeBanner">
            <span className='HomeBannerContent'>AQUÍ IRIA EL BANNER</span>
        </div>
        <div className='HomeHallOfFame'>
            <HallOfFame/>
        </div>
        <a href='/list' className='HomeListButton'>View players list</a>
    </div>
    )
}

export default Home