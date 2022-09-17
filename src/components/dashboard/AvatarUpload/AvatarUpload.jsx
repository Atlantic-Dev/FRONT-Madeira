import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadAvatar } from '../../../redux/actions'

const AvatarUpload = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    async function handleChange(file) {
            console.log("change", file[0])
            setImage("upload")
            const data = new FormData();
            data.append("image", file[0]);
            try {
                dispatch(uploadAvatar(data))
            }catch (e) {
              console.log(e)
            }
       
    }

    return (
        <div className='DashboardAvatar'>
            <form onSubmit={handleAvatar} className='DashboardForm'>
                <button
                    className={image !== '' ? 'DashboardFormInputFileLabelUploaded' :'DashboardFormInputFileLabel'} 
                    for="UploadImage"
                    variant="contained"
                    onClick={handleClick}
                >
                    {image !== '' ? "Image uploaded. Click to change" :"Select image"}
                </button>
                <input
                    className='DashboardFormInputFile'
                    ref={hiddenFileInput}
                    type="file"
                    id="file"
                    accept=".jpg"
                    multiple
                    onChange={(event) => {
                        handleChange(event.target.files);
                    }}
                />
                <input className='DashboardFormAvatarSubmit' type="submit" value="Upload" />
            </form>
        </div>
    ); /* 
    return(
        <div className='DashboardAvatar'>
            <form  className='DashboardForm'>
                <div className='DashboardFormInputFileDiv'>
                    <label className={image !== '' ? 'DashboardFormInputFileLabelUploaded' :'DashboardFormInputFileLabel'} for="UploadImage">{image !== '' ? "Image uploaded. Click to change" :"Select image"}</label>
                    <input onChange={handleUpload} id="UploadImage" className='DashboardFormInputFile' type="file" accept="image/*"/>
                </div>
                
            </form>
        </div>
    )  */
}

export default AvatarUpload