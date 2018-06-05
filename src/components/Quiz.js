import React, { Component } from 'react'
import speak from '../lib/speak'

class Quiz extends Component {
  componentDidMount(){
     this.nameInput.focus()
  }

  onSubmitWord = (e) => {
    e.preventDefault()
    this.nameInput.focus();
    if (this.props.evaluateWord(e.target.elements["word"].value)){
      e.target.elements["word"].value = ''
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <input type='text' id="word" ref={(input) => { this.nameInput = input }}></input>
          <button>Continue</button>
        </form>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
