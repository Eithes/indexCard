import React from 'react';
import './Footer.scss';

function Footer(props) {
  const { setName, emoji, } = props;
  return (
    <footer className="Footer">
      <h4 className='Footer-name'>{setName}</h4>
      <span className='emoji'>{emoji}</span>
    </footer>
  );
}

export default Footer;