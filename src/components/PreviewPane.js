import React from 'react'
const PreviewPane = ( {image, topText, bottomText}) => {
   
    return (
    <div id="preview-container">
        <img className="preview-image" src={image} alt="Your Meme Here"></img>
        <div className="topText">{topText}</div>
        <div className="bottomText">{bottomText}</div>
    </div>
    )
}


export default PreviewPane