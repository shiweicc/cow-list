import React from 'react';
import CowItem from './CowItem';

const CowList = (props) => {
  return (
    <div className="cowList">
      {props.cowList.map((item) => <CowItem key={item.id} name={item.name} />)}
    </div>
  );
};

export default CowList;
