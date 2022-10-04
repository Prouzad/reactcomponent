import React from 'react';
import { Link } from 'react-router-dom';

const HeaderApp = () => {
  return (
    <div
      className="header"
      style={{
        width: '100vw',
        height: 65,
        display: 'flex',
        alignItems: 'center',
        background: '#04293A',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '50%' }}>
        <Link to="/" style={{ textDecoration: 'none', marginRight: 150, color: 'white' }}>
          Main Page
        </Link>
        <Link to="about" style={{ textDecoration: 'none', color: 'white' }}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default HeaderApp;
