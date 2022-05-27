import React from 'react';

const CowItem = (props) => {
  return (
  <div className='cowItem'>
    <span onClick={(e) => props.handleClick(e)}>{props.name}</span>
  </div>
  )
};

export default CowItem;
