import React from "react";
import imageLoading from '../../images/Loading.png'
import './Loading.css'

const Loading = () => {
    return (
    <div className="Loading">
        <div className="LoadingImageCont">
            <img className="LoadingImage" src={imageLoading}/>
        </div>
    </div>
    )
}

export default Loading