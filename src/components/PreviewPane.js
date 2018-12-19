import React from 'react'
const PreviewPane = ( {image, topText, bottomText}) => {
   
    return (
    <div>
        <p>{topText}</p>
       <img src={image}></img>
       <p>{bottomText}</p>
    </div>)
}


export default PreviewPane