import React from 'react';
import './App.css';
import axios from "axios";
import { response } from 'express';

class App extends React.Component{
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
      // eslint-disable-next-line no-template-curly-in-string
      console.error("Error fetching data: ${error}");
    })
  }
  
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