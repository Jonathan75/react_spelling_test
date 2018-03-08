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

  componentDidMount() {
    this.setState({wordList: JSON.parse(localStorage.getItem("wordList") || "[]")})
  }

  storeWordList = (wordList) => {
    localStorage.setItem("wordList", JSON.stringify(wordList))
  }

  addWord = (e) => {
    e.preventDefault()
    this.setState(
      {wordList: this.state.wordList.concat(e.target.elements["word"].value)},
      () => {this.storeWordList(this.state.wordList)}
    )
  }

  speak = (text) => {
    console.log('speaking', text)
    var u = new SpeechSynthesisUtterance()
    u.text = text
    u.lang = 'en-US'
    // u.voice = voice
    u.rate = 1.0
    u.pitch = 1.0
    u.volume = 1
    window.speechSynthesis.speak(u)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addWord}>
          <input id="word"></input>
          <button>Add word</button>
        </form>
        <WordList wordList={this.state.wordList} />
        <button onClick={() => this.speak('Testing 1,2,3')}>Audio Test</button>
      </div>
    );
  }
}

export default App
