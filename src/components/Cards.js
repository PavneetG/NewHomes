import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import BramptonMount from '../images/BramptonMount.jpg';
import BramptonCleave from '../images/BramptonCleave.jpg'
import MiltonSoliel from '../images/MiltonSoliel.jpg';
import CaledonTrials from '../images/CaledonTrails.jpg';
import CaledonCastle from '../images/CaledonCastle.png';
import OakvilleGlen from '../images/OakvilleGlen.png';
import NewmarketHill from '../images/NewmarketHill.png';
import NewmarketAnchor from '../images/NewmarketAnchor.jpg';
function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={CaledonTrials}
              text='Caledon Trials'
              label='Caledon'
              path='https://caledontrails.ca/'
            />
            <CardItem
              src={BramptonMount}
              text='Mount Pleasant'
              label='Brampton'
              path='https://townwoodhomes.com/mount-pleasant/'
            />
            <CardItem
              src={BramptonCleave}
              text='Cleave View Estates'
              label='Brampton'
              path='https://www.countrywidehomes.ca/community/cleave-view-estate/'
            />
            <CardItem
              src={NewmarketAnchor}
              text='Anchor Woods'
              label='Newmarket'
              path='https://anchorwoods.ca/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={MiltonSoliel}
              text='Soliel Condos'
              label='Milton'
              path='https://mattamyhomes.com/ontario/gta/milton/soleil-condos'
            />
            <CardItem
              src={NewmarketHill}
              text='Shining Hill'
              label='Newmarket'
              path='https://shininghill.ca/'
            />
            <CardItem
              src={CaledonCastle}
              text='Castles of Caledon'
              label='Caledon'
              path='https://castles-of-caledon.ca/'
            />
            <CardItem
              src={OakvilleGlen}
              text='Glen Abby Encore'
              label='Oakville'
              path='http://glenabbeyencore.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;