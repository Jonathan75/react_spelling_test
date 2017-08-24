import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: []
    }
    this.addWord = this.addWord.bind(this);
  }

  addWord = (event) => {
    this.setState({ wordList.push(event.target.value) })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addWord}>
          <input ></input>
          <button>Add word</button>
        </form>
      </div>
    );
  }
}

export default App;
