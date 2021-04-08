import React from 'react';
import '../../App.css';
import './Communities.css';
import Toronto from '../../images/Toronto.jpg';
import Brampton from '../../images/Brampton.jpg';
import Milton from '../../images/Milton.jpg';
import Caledon from '../../images/Caledon.jpg';
import Markham from '../../images/Markham.jpg';
import RichmondHill from '../../images/RichmondHill.png';
import Hamilton from '../../images/Hamilton.jpg';

export default function Communities() {
  return (
    <>

    <div class="row">
      <div class="column">
          <div class="image-container">
            <img src= {Toronto} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Toronto</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>

      <div class="column">
          <div class="image-container">
            <img src= {Brampton} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Brampton</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>

      <div class="column">
          <div class="image-container">
            <img src= {Milton} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Milton</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>
    </div>

    <div class="row">
      <div class="column">
          <div class="image-container">
            <img src= {Caledon} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Caledon</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>

      <div class="column">
          <div class="image-container">
            <img src= {Markham} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Markham</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>

      <div class="column">
          <div class="image-container">
            <img src= {RichmondHill} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Richmond Hill</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>
    </div>

    <div class="row">
      <div class="column">
          <div class="image-container">
            <img src= {Hamilton} alt="" style = {{width: '100%'}}/>
            <div  class='overlay-2'>
              <p class = "title">Hamilton</p>
              <p class = "subtitle">Semis, Singles, Towns, Condos</p>
            </div> 
          </div>
      </div>

    </div>


    </>
  );
}