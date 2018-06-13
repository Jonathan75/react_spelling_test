import React, { Component } from 'react'
import './App.css'
import QuizBuilder from './components/quizBuilder'
import Quiz from './components/quiz'
import speak from './lib/speak'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuiz: false,
      wordList: [],
      currentWordIndex: 0,
      currentWord: '',
      incorrectAttemptCount: 0,
      totalAttemptCount: 0
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

  startQuiz = () => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    this.setState({isQuiz: true, currentWord: currentWord})
    speak(`Spell ${currentWord}`)
  }

  stopQuiz = () => {this.setState({isQuiz: false})}

  evaluateWord = (word) => {
    const currentWord = this.state.wordList[this.state.currentWordIndex]
    this.setState({totalAttemptCount: this.state.totalAttemptCount + 1})
    if (word === currentWord){
      speak('Correct. Good job!')
      if (this.state.currentWordIndex >= this.state.wordList.length -1) {
        speak('Test complete')
        this.setState({isQuiz: false})
      } else {
        const index = this.state.currentWordIndex + 1
        const newWord = this.state.wordList[index]
        speak(`Now spell ${newWord}`)
        this.setState({currentWordIndex: index, currentWord: newWord})
      }
      return true;
    } else {
      this.setState({incorrectAttemptCount: this.state.incorrectAttemptCount + 1})
      speak(`Incorrect. Please spell, ${currentWord}`)
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
