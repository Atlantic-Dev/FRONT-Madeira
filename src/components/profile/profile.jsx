import './profile.css'
import avatar from '../../images/avatar1.png'

const Profile = () => {
    return (
        <div className='Profile'>
            <div className='ProfileAvatar'>
                <img className='ProfileAvatarImg' src={avatar} alt='Avatar'/>
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
                        <h3 className='ProfileDataContentPoints'>1930</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile