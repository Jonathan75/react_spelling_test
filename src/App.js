import React, { Component } from 'react'
import './App.css'
import QuizBuilder from './components/quizBuilder'
import Quiz from './components/Quiz'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuiz: false,
      wordList: []
    }
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

  startQuiz = () => {this.setState({isQuiz: true})}
  stopQuiz = () => {this.setState({isQuiz: false})}

  render() {
    const body = this.state.isQuiz ?
        <Quiz stopQuiz={this.stopQuiz}/> :
        <QuizBuilder
          wordList={this.state.wordList}
          addWord={this.addWord}
          startQuiz={this.startQuiz}
          />

    return (
      <div>
        {body}
      </div>
    )
  }
}

export default App
