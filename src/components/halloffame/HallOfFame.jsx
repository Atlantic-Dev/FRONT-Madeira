import React from 'react'
import './HallOfFame.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAvatars, getAllCustomers } from '../../redux/actions'
import { useEffect } from 'react'

const HallOfFame = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCustomers())
        dispatch(getAllAvatars())
    },[])

    const allAvatars = useSelector((state) => state.avatars)
    const allCustomers = useSelector((state) => state.customers)

    const topTen = allCustomers?.slice(0, 10)

    //Ranking number
    function rankOf (customer) {
        return allCustomers?.indexOf(customer)+1
    }

    //Even or not to define div`s classname (different background color)
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
                            Player
                        </span>
                        <div className='HofTopUserData'>
                            <span className='HofTopUserDataId'>
                                Id
                            </span>
                            <div className='HofTopUserStatusPoints'>
                                <span className='HofTopUserDataSpan'>
                                    Status
                                </span>
                                <span className='HofTopUserDataSpan'>
                                    Points
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {topTen?.map((player, index) => {
                    return (
                        <div className={isEven(index) === 0 ? 'HofTopGrey': 'HofTopDark'}>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={`./images/${rankOf(player)}.png`}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={allAvatars[player.avatar - 1]?.imageUrl}/>
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
                                            {player._id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusPoints'>
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
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default HallOfFame
