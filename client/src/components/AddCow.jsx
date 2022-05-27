import React from 'react';

class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '' };

    this.getName = this.getName.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getName(e) {
    this.setState({ name: e.target.value });
  }

  getDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCow(this.state.name, this.state.description);
  }

  render() {
    return (
      <div className="AddCow">
        <h3>Add new cow 🐮:</h3>
        <form className="form">
          <label>
            Cow Name:
            <input type="text" name="name" onChange={(e) => this.getName(e)} />
          </label>
          <br></br>
          <label>
            Description:
            <input type="text" name="description" onChange={(e) => this.getDescription(e)} />
          </label>
          <input type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
      </div>
    );
  }
}

export default AddCow;
