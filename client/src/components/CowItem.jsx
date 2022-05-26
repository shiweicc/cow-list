import React from 'react';

const CowItem = (props) => (
  <div className='cowItem'>
    <span>{props.name}</span>
    <span>{props.description}</span>
  </div>
);

export default CowItem;
