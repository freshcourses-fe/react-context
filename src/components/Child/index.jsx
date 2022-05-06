import React from 'react';
import UserCard from '../UserCard';

const Child = (props) => {
  return (
    <div style={{ border: '5px dotted blue', padding: '10px' }}>
      <p>Child</p>
      <UserCard user={props.user} />
    </div>
  );
};

export default Child;
