import React from 'react';
import './SetThumbnail.scss';

function SetThumbnail(props) {
  const {id, name, borderColor, emoji, size} = props;

  return (
      <div className="SetThumbnail" style={{borderColor: borderColor}} >
        <h4 className='SetThumbnail_name'>{name}</h4>
        <div className='SetThumbnail_info'>
          <p className='SetThumbnail_info_size'>{size}</p>
          <p className='SetThumbnail_info_emogi'>{emoji}</p>
        </div>
        <div className="SetThumbnail_delete">
          <i className="fas fa-trash"></i>
        </div>
    </div>  
  );
}

export default SetThumbnail;