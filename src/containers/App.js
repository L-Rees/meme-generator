import React, { Component } from 'react';
import domtoimage from 'dom-to-image-more';
import '../index.css';
import MemeGenerator from '../components/MemeGenerator';
class App extends Component {
  constructor(props){
    super(props);
    const images = ['./images/1PCyDuD.jpg', './images/Creepy-Condescending-Wonka.jpg', './images/grumpy-cat.jpg', './images/Its-Finally-Over.jpg', './images/Picard-Wtf.jpg', './images/thatdbegreat.jpg', './images/X-X-Everywhere.jpg'  ];
    const topText = ""
    const bottomText = ""
  

    this.state = { image: "./images/default.jpeg", images, topText, bottomText };
  }

  selectImage = (event) => {
    this.setState({image: event.target.getAttribute("data-key") })
  }

  setTopText = (event) => {
    this.setState({topText: event.target.value})
  }

  setBottomText = (event) => {
    this.setState({bottomText: event.target.value})
  }


  
  saveImage = () => {
    domtoimage.toJpeg(document.getElementById('preview-container'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'meme.jpeg';
        link.href = dataUrl;
        link.click();
    });
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Meme Generator</h1>
        </header>
     
        <MemeGenerator
          image = {this.state.image}
          selectImage = {this.selectImage}
          images = {this.state.images}
          topText = {this.state.topText}
          bottomText = {this.state.bottomText}
          setTopText = {this.setTopText}
          setBottomText = {this.setBottomText}
          saveImage = {this.saveImage}
        />
       </div>
    );
  }
}

export default App;
