import React, { Component } from 'react'
import './App.css'
import WordList from './components/WordList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordList: []
    }
    this.addWord = this.addWord.bind(this);
  }

  addWord = (e) => {
    e.preventDefault()
    this.setState({wordList: this.state.wordList.concat(e.target.elements["word"].value)})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addWord}>
          <input id="word"></input>
          <button>Add word</button>
        </form>
        <WordList wordList={this.state.wordList} />
      </div>
    );
  }
}

export default App
