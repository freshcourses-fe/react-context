import React from 'react';
import { UserContext } from '../../contexts';

const UserCard = () => {
  const renderFunc = (user) => (
    <div style={{ border: '5px dotted orange', padding: '10px' }}>
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <img alt={`${user.firstName} ${user.lastName}`} src={user.pictureSrc} />
    </div>
  );
  return <UserContext.Consumer>{renderFunc}</UserContext.Consumer>;
};

export default UserCard;
