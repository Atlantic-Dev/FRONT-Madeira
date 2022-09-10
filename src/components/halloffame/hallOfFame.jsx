import './hallOfFame.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCustomers } from '../../redux/actions'
import { useEffect } from 'react'

const HallOfFame = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCustomers())
    },[])
    
    const allCustomers = useSelector((state) => state.customers.data)
    const completeList = allCustomers?.Ruby.concat(allCustomers?.Diamond.concat(allCustomers?.Platinum.concat(allCustomers?.Gold.concat(allCustomers?.Silver.concat(allCustomers?.Bronze.concat(allCustomers?.Copper.concat()))))))
    const topTen = completeList?.slice(0, 10)

    //Numero de ranking
    function rankOf (customer) {
        return completeList?.indexOf(customer)+1
    }

    //Par o impar para definir className del div (diferentes BG-color)
    function isEven(n) {
        return n % 2
    }


    
          
    return (
        <div className="Hof">
            <div className='HofContainer'>
                <div className='HofTopTitles'>
                    <div className='HofTopFirstDiv'>
                        <span>
                            Rank
                        </span>
                        <span>
                            Avatar
                        </span>
                    </div>
                    <div className="HofTopSecondDiv">
                        <span className='HofTopUserTitle'>
                            User
                        </span>
                        <div className='HofTopUserData'>
                            <span>
                                Id
                            </span>
                            <span>
                                Status
                            </span>
                            <span>
                                Points
                            </span>
                        </div>
                    </div>
                </div>
                {topTen?.map((player, index) => {
                    return (
                        isEven(index) === 0 
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={`./images/${rankOf(player)}.png`}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={`./images/avatar${player.avatar}.png`}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <a href={`/profile/${player._id}`} className='HofTopNickname'>
                                        {player.nickname}
                                    </a>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className={`HofTopStatus${player.status}`}>
                                            {player.status}
                                        </span>
                                    </div>
                                    <div className='HofTopPointsDiv'>
                                        <span className='HofTopPoints'>
                                            {player.totalPoints}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='HofTopDark'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={`./images/${rankOf(player)}.png`}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={`./images/avatar${player.avatar}.png`}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <a href={`/profile/${player._id}`} className='HofTopNickname'>
                                        {player.nickname}
                                    </a>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className={`HofTopStatus${player.status}`}>
                                            {player.status}
                                        </span>
                                    </div>
                                    <div className='HofTopPointsDiv'>
                                        <span className='HofTopPoints'>
                                            {player.totalPoints}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default HallOfFame