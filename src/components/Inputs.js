import React from 'react'

const Inputs = ( {setTopText, setBottomText, saveImage}) => {
   
    return (
    <div className="inputContainer">
        <input className="topInput" type="text" onChange={setTopText} placeholder="Upper Hilarity"></input>
        <input className="bottomInput" type="text" onChange ={setBottomText} placeholder="Lower Wittiness"></input>
        <button onClick={saveImage}>Save This Meme</button> 
    </div>)
}


export default Inputs