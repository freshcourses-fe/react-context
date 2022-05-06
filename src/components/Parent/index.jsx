import React from 'react';
import Child from '../Child';

const Parent = (props) => {
  return (
    <div style={{ border: '5px solid green', padding: '10px' }}>
      <h2>Parent</h2>
      <Child user={props.user}/>
    </div>
  );
};

export default Parent;
