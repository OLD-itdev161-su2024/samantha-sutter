import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
            GoodThings
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Register</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/">
              {this.state.data}
            </Route>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
            </Switch>
          </main>
      </div>
      </Router>
    );
  }
}
export default App;
