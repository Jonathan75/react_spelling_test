import React, { Component } from 'react'
import QuizBuilder from './components/quizBuilder'
import Quiz from './components/quiz'
import speak from './lib/speak'
import { compareWords } from './helper'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuiz: false,
      wordList: [],
      currentWordIndex: 0,
      currentWord: ''
    }
    this.evaluateWord = this.evaluateWord.bind(this)
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

  removeWord = (word) => {
    e.preventDefault()
    this.setState(
      {wordList: this.state.wordList.ary.filter(w => w !== word)},
      () => {this.storeWordList(this.state.wordList)}
    )
  }

  startQuiz = () => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    this.setState({isQuiz: true, currentWord: currentWord})
    speak(`Spell ${currentWord}`)
  }

  stopQuiz = () => {this.setState({isQuiz: false, currentWordIndex: 0})}

  evaluateWord = (word) => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    if (compareWords(word, currentWord)){
      speak('Correct. Good job!')
      if (this.state.currentWordIndex >= this.state.wordList.length -1) {
        speak('Test complete')
        this.stopQuiz()
      } else {
        const index = this.state.currentWordIndex + 1
        const newWord = this.state.wordList[index]
        speak(`Now spell ${newWord}`)
        this.setState({currentWordIndex: index, currentWord: newWord})
      }
      return true;
    } else {
      speak(`Incorrect. Please spell`)
      speak(currentWord, 0.1)
      return false;
    }
  }

  render() {
    const body = this.state.isQuiz ?
        <Quiz
          stopQuiz={this.stopQuiz}
          evaluateWord = {this.evaluateWord}
        /> :
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
