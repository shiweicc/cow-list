import React from 'react';

const CowItem = (props) => {
  return (
  <div className='cowItem'>
    <span>{props.name}</span>
  </div>
  )
  };

export default CowItem;
