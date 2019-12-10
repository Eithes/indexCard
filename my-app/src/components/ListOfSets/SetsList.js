import React from 'react';
import { Link } from 'react-router-dom';
import './SetsList.scss';

function SetsList(props) {
  const { allSets } = props;  
  return (
    <div className="SetsList">
        {allSets.map(set => <p><Link to={`set/${set.id}`}>{set.setName}</Link></p>)}       
    </div>
  );
}

export default SetsList;