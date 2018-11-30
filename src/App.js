import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBalanceScale, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

library.add(faBalanceScale, faThermometerHalf);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="icon-container">
          <FontAwesomeIcon icon="balance-scale" />
          <FontAwesomeIcon icon="thermometer-half" />
        </div>
        <SearchBar />        
      </div>
    );
  }
}

export default App;
