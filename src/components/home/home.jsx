import './home.css'
import HallOfFame from '../halloffame/hallOfFame'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCustomers } from '../../redux/actions'

const Home = () => {
    const dispatch = useDispatch()

    const allCustomers = useSelector((state) => state.customers)

    function handleClick(e){
        e.preventDefault()
        dispatch(getAllCustomers())
    }

    function handleConsole(e){
        e.preventDefault()
        console.log(allCustomers)
    }

    return (
    <div className="Home">
        <div className="HomeBanner">
            <span className='HomeBannerContent'>AQUÍ IRIA EL BANNER</span>
        </div>
        <div className='HomeHallOfFame'>
            <button onClick={(e) => handleClick(e)}>ACTION</button>
            <button onClick={(e) => handleConsole(e)}>console</button>
            <HallOfFame/>
        </div>
        <a href='/list' className='HomeListButton'>View players list</a>
    </div>
    )
}

export default Home