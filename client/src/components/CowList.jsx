import React from 'react';
import CowItem from './CowItem';

const CowList = (props) => {
  return (
    <div className="cowList">
      <h3>🐮 Here are our cows:  </h3>
      {props.cowList.map((item) => <CowItem key={item.id} name={item.name} handleClick={(e) => {props.handleClick(e)}}/>)}
    </div>
  );
};

export default CowList;

// ٩(˘◡˘)۶