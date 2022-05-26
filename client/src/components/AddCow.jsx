import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: null, decription: null};
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Decription:
          <input type="text" name="decription" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddCow;
