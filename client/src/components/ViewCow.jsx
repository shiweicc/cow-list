import React from 'react';

const ViewCow = (props) => {
  return (
    <div className="ViewCow">
      <h3>🐮 Your selected cow:</h3>
      <span>Name: {props.selectedCowName}</span>
      <br />
      <span>Description: {props.selectedCowDes}</span>
    </div>
  );
}

export default ViewCow;
