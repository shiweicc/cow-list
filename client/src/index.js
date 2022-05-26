import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CowList from './components/CowList';

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
        console.log('res in readAll: ', res);
        this.setState({ cowList: res.data });
      });
  }

  render() {
    return (
      <div>
        <h1>Cow List</h1>
        <CowList cowList={this.state.cowList} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
