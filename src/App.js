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
    const body = this.state.isQuiz ?
        <div>Test Here</div> :
        <QuizBuilder wordList={this.state.wordList} addWord={this.addWord}/>

    return (
      <div>
        {body}
      </div>
    )
  }
}

export default App
