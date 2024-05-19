// src/components/SideNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      color: 'black',
      width: '200px',
      border: '1px solid black',
      padding: '10px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 40 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/" style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '18px',
              display: 'block',
              padding: '10px',
              borderRadius: '5px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = 'white'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;