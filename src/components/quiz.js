import React, { Component } from 'react'

class Quiz extends Component {
  state = {
    peekCounter: 0
  }

  peekShow = (e) => {
    e.preventDefault()
    this.setState({peekCounter: this.state.peekCounter+1})
  }

  onSubmitWord = (e) => {
    e.preventDefault()
    if (this.props.evaluateWord(e.target.elements["word"].value)){
      e.target.elements["word"].value = ''
      this.setState({peekCounter: 0 })
    }
  }

  render(){
    const peekItem = this.state.peekCounter > 0 ? <div className='fadeOut' key={this.state.peekCounter}>{this.props.currentWord}</div> : null
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <div>
            <input className='jest-word-input' aria-label="word-input" type='text' id="word" autoFocus></input>
          </div>
          <div>
            <button className='jest-continue-button'>Continue</button>
          </div>
          <div>
            <button className='jest-peek-button' onClick={this.peekShow}>Peek</button>
            {peekItem}
          </div>
        </form>
        <button className='jest-exit-button' onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
