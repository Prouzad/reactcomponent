import React from 'react';
import { Link } from 'react-router-dom';

const HeaderApp = () => {
  return (
    <div
      className="header"
      style={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        background: 'red',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '50%' }}>
        <Link to="/" style={{ textDecoration: 'none', marginRight: 150 }}>
          Main Page
        </Link>
        <Link to="about" style={{ textDecoration: 'none' }}>
          About Us
        </Link>
      </div>
    </div>
  );
};

export default HeaderApp;
