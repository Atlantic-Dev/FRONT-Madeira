import './profile.css'


const Profile = () => {
    return (
        <div className='Profile'>
            <div className='ProfileInfoTop'>
                <div className='ProfileAvatar'>
                    {/* <img className='ProfileAvatarImg' src={avatar} alt='Avatar'/> */}
                        <div className='ProfileDataEditDiv'>
                            <button className='ProfileDataEditBtn'>EDIT PROFILE</button>
                        </div>
                </div>
                <div className='ProfileData'>
                    <div className='ProfileDataTitle'>
                        <h1>Valentin Torres Erwerle</h1>
                    </div>
                    <div className='ProfileDataContent'>
                        <div className='ProfileDataContentTop'>
                            <h3 className='ProfileDataContentID'>ID #1</h3>
                            <h3 className='ProfileDataContentStatus'>Diamond</h3>
                        </div>
                        <div className='ProfileDataContentBottom'>
                            <h3 className='ProfileDataContentRank'>Rank #18</h3>
                            <h3 className='ProfileDataContentPoints'>1930 LP</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProfileInfoBottom'>
                <div className='ProfileInfoBottomTitle'>
                    <h3>Total matchs</h3>
                    <h3>Total wins</h3>
                    <h3>Winrate</h3>
                </div>
                <div className='ProfileInfoBottomData'>
                    <h3>396</h3>
                    <h3>217</h3>
                    <h3>55%</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile