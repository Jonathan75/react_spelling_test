import React, { Component } from 'react'

class Quiz extends Component {
  state = {
    peekCounter: 0,
    currentWord: this.props.currentWord
  }

  peekShow = (e) => {
    e.preventDefault()
    this.setState({peekCounter: this.state.peekCounter+1})
  }

  onSubmitWord = (e) => {
    e.preventDefault()
    if (this.props.evaluateWord(e.target.elements["word"].value)){
      e.target.elements["word"].value = ''
    }
  }

  render(){
    const peekItem = this.state.peekCounter > 0 ? <div className='fadeOut' key={this.state.peekCounter}>{this.state.currentWord}</div> : null
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <div>
            <input type='text' id="word" autoFocus></input>
          </div>
          <div>
            <button>Continue</button>
          </div>
          <div>
            <button className='jest-peek-button' onClick={this.peekShow}>Peek</button>
            {peekItem}
          </div>
        </form>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
