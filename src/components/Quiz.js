import React, { Component } from 'react'
import speak from '../lib/speak'

class Quiz extends Component {

  evaluateWord = (e) => {
    this.props.evaluateWord(e.target.elements["word"].value)
  }

  render(){
    return(
      <div>
        <input type='text' id='word'/>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
        <button onClick={this.evaluateWord}>Continue</button>
      </div>
    )
  }
}

export default Quiz
