import React, { Component } from 'react';
import './App.css';
import StarWarsCharacters from './components/StarWarsCharacters'

const style = {
  width: '100%',
  margin: '0 auto',
  position: 'fixed',
  background: 'white',
  zIndex: '2',
  height: '100px'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header" style={style}>React Wars: <p>watch for your favorite character</p></h1>
          <div className="wrapper">
            <div className="crawl">
             <StarWarsCharacters characters={this.state.starwarsChars}/>
             </div>
          </div>
      </div>
    );
  }
}

export default App;
