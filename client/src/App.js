import React from 'react';
import './App.css';
<<<<<<< HEAD

class App extends React.Component {
=======
import axios from 'axios';

class App extends React.Compodent {
  state = {
    data: null
  }

componentDidMount() {
  axios.get('http://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  })
}
>>>>>>> main
  render() {
    return (
      <div className="App">
        <header className="App-header">
          GoodThings
        </header>
      </div>
    );
  }
}

export default App;
