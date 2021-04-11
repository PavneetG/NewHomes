import React from 'react';
import '../../App.css';
import './Communities.css';
import CommunitiesItem from './CommunitiesItem';
import Toronto from '../../images/Toronto.jpg';
import Brampton from '../../images/Brampton.jpg';
import Milton from '../../images/Milton.jpg';
import Caledon from '../../images/Caledon.jpg';
import Markham from '../../images/Markham.jpg';
import RichmondHill from '../../images/RichmondHill.png';
import Hamilton from '../../images/Hamilton.jpg';

export default function Communities() {
  return (
    <div className = "communities">
      <div className = "spacer"/>    
      <div className = "communities_container">
        <div className = "communities_wrapper">

          <ul className = "communities_items">
            <CommunitiesItem
              src = {Toronto}
              path = '/Toronto'
              community = 'Toronto'
              homes = 'Semis, Singles, Towns, Condos'
            />
            <CommunitiesItem
              src = {Brampton}
              path = '/Brampton'
              community = 'Brampton'
              homes = 'Semis, Singles, Towns, Condos'
            />
            <CommunitiesItem
              src = {Milton}
              path = '/Milton'
              community = 'Milton'
              homes = 'Semis, Singles, Towns, Condos'
            />
          </ul>

          <ul className = "communities_items">
            <CommunitiesItem
              src = {Caledon}
              path = '/Caledon'
              community = 'Caledon'
              homes = 'Semis, Singles, Towns, Condos'
            />
            <CommunitiesItem
              src = {Markham}
              path = '/Markham'
              community = 'Markham'
              homes = 'Semis, Singles, Towns, Condos'
            />
            <CommunitiesItem
              src = {RichmondHill}
              path = '/Richmond-Hill'
              community = 'Richmond Hill'
              homes = 'Semis, Singles, Towns, Condos'
            />
          </ul>

          <ul className = "communities_items">
            <CommunitiesItem
              src = {Hamilton}
              path = '/Hamilton'
              community = 'Hamilton'
              homes = 'Semis, Singles, Towns, Condos'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}