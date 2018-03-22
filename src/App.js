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

  // const Body = () => {
  //   if (this.state.isQuiz) {
  //     return <div>Test Here</div>
  //   }
  //
  //   return <QuizBuilder wordList={this.state.wordList} addWord={this.addWord}/>
  // }


  render() {
    return (
      <div>
        //{Body}
        <QuizBuilder wordList={this.state.wordList} addWord={this.addWord}/>
      </div>
    )
  }
}

export default App
