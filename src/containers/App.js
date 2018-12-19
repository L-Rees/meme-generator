import React, { Component } from 'react';
import '../index.css';
import MemeGenerator from '../components/MemeGenerator';
class App extends Component {
  constructor(props){
    super(props);
    const images = ['./images/1PCyDuD.jpg', './images/Creepy-Condescending-Wonka.jpg', './images/grumpy-cat.jpg', './images/Its-Finally-Over.jpg', './images/Picard-Wtf.jpg', './images/thatdbegreat.jpg', './images/X-X-Everywhere.jpg'  ];
    const topText = ""
    const bottomText = ""

    this.state = { image: "", images, topText, bottomText   };
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
  
  render() {
    return (
      <div>
        <h1>Meme Generator</h1>
     
        <MemeGenerator
          image = {this.state.image}
          selectImage = {this.selectImage}
          images = {this.state.images}
          topText = {this.state.topText}
          bottomText = {this.state.bottomText}
          setTopText = {this.setTopText}
          setBottomText = {this.setBottomText}
        />
       </div>
    );
  }
}

export default App;
