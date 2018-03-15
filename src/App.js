import React, { Component } from 'react'
import './App.css'
import QuizBuilder from './components/quizBuilder'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuiz: false,
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



  render() {
    return (
      <div>
        <QuizBuilder wordList={this.state.wordList} />
      </div>
    );
  }
}

export default App
