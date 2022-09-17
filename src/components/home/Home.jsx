import React from 'react'
import './Home.css'
import HallOfFame from '../hallOfFame/HallOfFame'
import banner from '../../Images/Banner.png'

const Home = () => {

    return (
    <div className="Home">
        <div className="HomeBanner">
            <img className='HomeBannerImg' src={banner} />
        </div>
        <div className='HomeHallOfFame'>
            <HallOfFame/>
        </div>
        <a href='/list' className='HomeListButton'>View players list</a>
    </div>
    )
}

export default Home
