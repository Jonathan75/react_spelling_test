import React, { Component } from 'react'
import './App.css'
import QuizBuilder from './components/QuizBuilder'
import Quiz from './components/Quiz'
import speak from './lib/speak'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuiz: false,
      wordList: [],
      currentWordIndex: 0,
      currentWord: ''
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

  startQuiz = () => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    this.setState({isQuiz: true, currentWord: currentWord})
    speak(`Spell ${currentWord}`)
  }

  stopQuiz = () => {this.setState({isQuiz: false})}

  evaluateWord = (word) => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    if (word === currentWord){
      speak('Correct')
      if (this.state.currentWordIndex -1 >= this.state.wordList.length ) {
        
      } else {
        const index = this.state.currentWordIndex + 1
        cost newWord = this.state.wordList[next]        
      }
    }
  }

  render() {
    const body = this.state.isQuiz ?
        <Quiz stopQuiz={this.stopQuiz} /> :
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
