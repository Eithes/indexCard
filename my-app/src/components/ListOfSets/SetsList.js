import React from 'react';
import { Link } from 'react-router-dom';
import './SetsList.scss';
import SetThumbnail from '../SetThumbnail/SetThumbnail';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';

function SetsList({ allSets }) {
  return (
    <div className="SetsList_wrapper">
      <NavBar />
      <div className="SetsList">
        { allSets.map(set => 
          <SetThumbnail 
            id={set.id}
            name={set.setName} 
            borderColor={set.borderColor} 
            key={set.id}
            emoji={set.emoji}
            size={set.cards.length}
          />
        ) }
        {allSets.map(set => <p key={set.id}><Link to={`set/${set.id}`}>{set.setName}</Link></p>)}
      </div> 
      <Footer /> 
    </div>
  );
}

export default SetsList;