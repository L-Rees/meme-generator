import React from 'react'
const PreviewPane = ( {image, topText, bottomText}) => {
   
    return (
    <div id="preview-container">
        <img className="preview-image" src={image} alt="something amazing"></img>
        <div className="topText">{topText}</div>
        <div className="bottomText">{bottomText}</div>
    </div>
    )
}


export default PreviewPane