import React, { Component } from 'react'
import './App.css'
import WordList from './components/WordList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordList: JSON.parse(localStorage.getItem("wordList") || "[]")
    }
    this.addWord = this.addWord.bind(this);
  }

  storWordList = (wordList) => {
    localStorage.setItem("wordList", JSON.stringify(wordList))
  }

  addWord = (e) => {
    e.preventDefault()
    const updatedWordList = this.state.wordList.concat(e.target.elements["word"].value)
    this.setState({wordList: updatedWordList})
    this.storWordList(updatedWordList)
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
