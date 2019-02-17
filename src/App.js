import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import './App.css';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
  
        <div className='App'>
          <Postform/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
