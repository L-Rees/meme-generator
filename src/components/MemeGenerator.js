import React from 'react';
import Thumbnails from './Thumbnails'
import PreviewPane from './PreviewPane';
import Inputs from './Inputs';

const MemeGenerator = (props) => {
    return (
        <div className="grid-container">
                
            <div className="thumbnails">
            <Thumbnails
                action = {props.selectImage}
                images = {props.images}
            />
            </div>
        
            <div className="previewAndInput">
                <div className="preview">
                <PreviewPane
                    image = {props.image}
                    topText= {props.topText}
                    bottomText = {props.bottomText}
                />

                </div>
    
                <div className="inputs">
                <Inputs
                    setBottomText = {props.setBottomText}
                    setTopText = {props.setTopText}
                />
                </div>
            </div>
        </div>

    )
}
export default MemeGenerator



