import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CowList from './components/CowList';
import AddCow from './components/AddCow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
    };
  }

  componentDidMount() {
    this.readAll();
  }

  readAll() {
    axios.get('/api/cows')
      .then((res) => {
        this.setState({ cowList: res.data });
      });
  }

  addCow(name, description) {
    let newCow = {name: name, description: description};
    axios.post('/api/cows', newCow)
      .then((res) => {
        console.log('Success add a new cow!', res);
        this.setState([...this.cowList, newCow]);
      })
      .then(this.readAll())
      .catch((err) => console.log('Error adding new cow!', err));
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Cow List 🐄</h1>
        <AddCow addCow={this.addCow.bind(this)} />
        <CowList cowList={this.state.cowList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
