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
        const data = new FormData();
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
    /* const [state, setState] = useState();
    const dispatch = useDispatch()

    const hiddenFileInput = React.useRef(null);

    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };

    async function handleChange(file) {
        console.log("change", file[0])
            const data = new FormData();
            data.append("image", file[0]);
            try {
                dispatch(uploadAvatar(data))
            }catch (e) {
              console.log(e)
            }
       
    }

    return (
        <div className="App">
            <div className="flex">
                <button
                    style={{margin: '20px', width: '80%'}}
                    variant="contained"
                    color="default"
                    onClick={handleClick}
                >
                    Upload
                </button>
                <input
                    style={{ display: "none" }}
                    ref={hiddenFileInput}
                    type="file"
                    id="file"
                    accept=".jpg"
                    multiple
                    onChange={(event) => {
                        handleChange(event.target.files);
                    }}
                />
            </div>
        </div>
    ); */
}

export default AvatarUpload