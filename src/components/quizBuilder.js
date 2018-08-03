import React, { Component } from 'react'
import WordList from './wordList'
import speak from '../lib/speak'

class QuizBuilder extends Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.addWord}>
          <input type="text" id="word" />
          <button>Add word</button>
        </form>
        <WordList wordList={this.props.wordList} removeWord={this.props.removeWord} />
        <button onClick={this.props.startQuiz}>Start Test</button>
        <button onClick={() => speak('Testing 1,2,3')}>Audio Test</button>
      </div>
    )
  }

}

export default QuizBuilder
