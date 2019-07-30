import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Show from './components/Show';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import INFO from './INFO';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolList: INFO.schoolList
    
    }
  }
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <div className='container'>
              <Header />
            </div>
            <Route path='/schools/:id' 
                render={(props) => <Show schoolList={this.state.schoolList} />} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
