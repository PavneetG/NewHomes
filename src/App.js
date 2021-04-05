import './App.css';
import React from 'react'; 
import Navbar from "./components/Navbar/Navbar";
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AutoplaySlider
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={6000}
      fillParent={false}
      bullets={false}
      >
      <div data-src={image1}/>
      <div data-src={image2}/>
      <div data-src={image3}/>
      </AutoplaySlider>
    </div>
  );
}

export default App;
