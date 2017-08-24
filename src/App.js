import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: [],
      newWordValue: ''
    }
    this.addWord = this.addWord.bind(this);
  }

  addWord = (e) => {
    debugger
    e.preventDefault();
    this.setState({wordList: this.state.wordList.concat(this.state.newWordValue)})
  }

  captureNewWordValue = (e) => {
    this.setState({newWordValue: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addWord}>
          <input onChange={this.captureNewWordValue}></input>
          <button>Add word</button>
        </form>
      </div>
    );
  }
}

export default App;
