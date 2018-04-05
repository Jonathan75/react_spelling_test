import React, { Component } from 'react'
import speak from '../lib/speak'

class Quiz extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
