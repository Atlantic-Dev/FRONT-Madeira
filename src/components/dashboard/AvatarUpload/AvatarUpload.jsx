import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadAvatar } from '../../../redux/actions'

const AvatarUpload = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    function handleAvatar(e){
        e.preventDefault()
        dispatch(uploadAvatar(image))
    }

    function handleUpload (e){
        setImage(e.target.value)
    }
    
    return(
        <div className='DashboardAvatar'>
            <form onSubmit={handleAvatar} className='DashboardForm'>
                <div className='DashboardFormInputFileDiv'>
                    <label className={image !== '' ? 'DashboardFormInputFileLabelUploaded' :'DashboardFormInputFileLabel'} for="UploadImage">{image !== '' ? "Image uploaded. Click to change" :"Select image"}</label>
                    <input onChange={handleUpload} id="UploadImage" className='DashboardFormInputFile' type="file" accept="image/*"/>
                </div>
                <input className='DashboardFormAvatarSubmit' type="submit" value="Upload" />
            </form>
        </div>
    )
}

export default AvatarUpload