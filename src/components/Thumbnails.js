import React from 'react'
const Thumbnails = ( {action, images}) => {
   
    return (
    <div>
       {images.map((image, index) => <img src={image} alt="" onClick={action}  data-key={image} key={index}></img>)}
    </div>)
}


export default Thumbnails
