import React from 'react';
import { UserContext } from '../../contexts';

const Header = () => {
  return (
    <UserContext.Consumer>
      {(userData) => (
        <header
          style={{
            border: '2px solid',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <h1>MY SITE</h1>
          <img
            alt="user"
            style={{ height: '64px', width: '64px' }}
            src={userData.pictureSrc}
          />
        </header>
      )}
    </UserContext.Consumer>
  );
};

export default Header;
