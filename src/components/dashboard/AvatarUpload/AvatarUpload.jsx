import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadAvatar } from '../../../redux/actions'

const AvatarUpload = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")
    const [files, setFiles] = useState({})

    const hiddenFileInput = React.useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    };

    async function handleChange(file) {
            setImage("upload")
            setFiles(file[0]);  
    }

    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData();
        data.append("image", files)
        console.log("data", data)
        try {
            dispatch(uploadAvatar(data))
        }catch (e) {
          console.log(e)
        }
    }

    function handleNull(e){
        e.preventDefault()
    }

    return (
        <div className='DashboardAvatar'>
            <form onSubmit={image === "upload" ? handleSubmit : handleNull} className='DashboardForm'>
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
                <input className={image === "upload" ? 'DashboardFormAvatarSubmit' : 'DashboardFormAvatarSubmitDisabled'} type="submit" value="Upload" />
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