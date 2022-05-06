import React from 'react';
import Parent from '../Parent';

const Grandparent = (props) => {
  return (
    <div style={{ border: '5px solid black', padding: '10px' }}>
      <h1>Grandparent</h1>
      <Parent user={props.user} />
    </div>
  );
};

export default Grandparent;
