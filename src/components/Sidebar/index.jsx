import React from 'react';
import { UserContext } from '../../contexts';
const Sidebar = () => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <article
          style={{
            maxWidth: '300px',
            margin: '10px',
            border: '5px solid gray',
          }}
        >
          <h1>{`${user.firstName} ${user.lastName}`}</h1>
        </article>
      )}
    </UserContext.Consumer>
  );
};

export default Sidebar;
