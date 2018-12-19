import React from 'react'
const Inputs = ( {setTopText, setBottomText}) => {
   
    return (
    <div>
       <form>
           <input type="text" onChange={setTopText}></input>
           <input type="text" onChange ={setBottomText}></input>
           
       </form>
    </div>)
}


export default Inputs