import React from 'react'
import './Home.css'
import HallOfFame from '../halloffame/HallOfFame'
import banner from '../../images/Banner.png'
import { useState } from 'react'
import Loading from '../loading/Loading'

const Home = () => {
    const [loading, setLoading] = useState(true)
    useState(() => {
        setTimeout(() => setLoading(false), 3500)
    })
    return ( 
        <>{
        loading === true ?
        <div className='LoadingContainer'>
            <Loading/>
        </div>
        : null}
        <div className={loading === true ? "HomeHidden" : "Home"}>
            <div className="HomeBanner">
                <img className='HomeBannerImg' src={banner} />
            </div>
            <div className='HomeHallOfFame'>
                <HallOfFame/>
            </div>
            <a href='/list' className='HomeListButton'>View players list</a>
        </div>
        </>
    )
}

export default Home
