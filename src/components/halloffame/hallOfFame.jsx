import './hallOfFame.css'
import rank1 from '../../images/1er.png'
import rank2 from '../../images/2do.png'
import rank3 from '../../images/3er.png'
import rank4 from '../../images/4to.png'
import rank5 from '../../images/5to.png'
import rank6 from '../../images/6to.png'
import rank7 from '../../images/7mo.png'
import rank8 from '../../images/8vo.png'
import rank9 from '../../images/9vo.png'
import rank10 from '../../images/10mo.png'
import avatar1 from '../../images/avatar1.png'
import avatar2 from '../../images/avatar2.png'
import avatar3 from '../../images/avatar3.png'
import avatar4 from '../../images/avatar4.png'
import avatar5 from '../../images/avatar5.png'
import avatar6 from '../../images/avatar6.png'
import avatar7 from '../../images/avatar7.png'

const HallOfFame = () => {
    const topPlayers = [
        {
        id: "1",
        nickname: "Terrell_Grady99",
        status: "Diamond",
        totalPoints: 2100
        },
        {
        id: "22",
        nickname: "Henderson.Stehr40",
        status: "Diamond",
        totalPoints: 2100
        },
        {
        id: "341",
        nickname: "Oswald.Padberg",
        status: "Diamond",
        totalPoints: 1950
        },
        {
        id: "28",
        nickname: "Elenora71",
        status: "Diamond",
        totalPoints: 2100
        },
        {
        id: "76",
        nickname: "Amos69",
        status: "Diamond",
        totalPoints: 2100
        },
        {
        id: "573",
        nickname: "April.Rodriguez71",
        status: "Diamond",
        totalPoints: 2100
        },
        {
        id: "1476",
        nickname: "Ricardo78",
        status: "Diamond",
        totalPoints: 1950
        },
        {
        id: "54",
        nickname: "Cayla_Hamill32",
        status: "Diamond",
        totalPoints: 1950
        },
        {
        id: "3",
        nickname: "Velma19",
        status: "Diamond",
        totalPoints: 1950
        },
        {
        id: "785",
        nickname: "Lee35",
        status: "Diamond",
        totalPoints: 2100
        }]
        const sortPlayers = topPlayers.sort((pa, pb) => {
            if (pa.totalPoints > pb.totalPoints) {
              return -1;
            }
            if (pa.totalPoints < pb.totalPoints) {
              return 1;
            }
          })
        console.log(sortPlayers)
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
                {sortPlayers.map((player) => {
                    console.log(sortPlayers.indexOf(player))
                    return (
                        sortPlayers.indexOf(player) === 0 
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank1}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar1}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 1 
                        ? 
                        <div className='HofTopDark'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank2}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar2}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 2 
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank3}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar3}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 3 
                        ? 
                        <div className='HofTopDark'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank4}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar4}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 4 
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank5}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar5}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 5 
                        ? 
                        <div className='HofTopDark'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank6}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar6}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 6
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank7}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar7}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 7 
                        ? 
                        <div className='HofTopDark'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank8}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar3}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                        sortPlayers.indexOf(player) === 8
                        ? 
                        <div className='HofTopGrey'>
                            <div className='HofTopImageCont'>
                                <div className='HofTopImg'>
                                    <img className='HofTopImg' src={rank9}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar2}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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
                                    <img className='HofTopImg' src={rank10}/>
                                </div>
                                <div className='HofTopAvatar'>
                                    <img className='HofTopAvatar' src={avatar5}/>
                                </div>
                            </div>
                            <div className='HofTopTextCont'>
                                <div className='HofTopNicknameDiv'>
                                    <span className='HofTopNickname'>
                                        {player.nickname}
                                    </span>
                                </div>
                                <div className='HofTopData'>
                                    <div className='HofTopIdDiv'>
                                        <span className='HofTopId'>
                                            {player.id}
                                        </span>
                                    </div>
                                    <div className='HofTopStatusDiv'>
                                        <span className='HofTopStatus'>
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