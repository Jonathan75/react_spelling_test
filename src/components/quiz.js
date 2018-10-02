import React, { Component } from 'react'

class Quiz extends Component {
  constructor() {
    super()
    this.wordInputBound = this.wordInputDraw.bind(this)
  }
  state = {
    peekCounter: 0
  }

  componentDidMount(){
     this.wordInputBound()
  }

  peekShow = (e) => {
    e.preventDefault()
    this.setState({peekCounter: this.state.peekCounter+1})
  }

  onSubmitWord = (e) => {
    e.preventDefault()
    this.nameInput.focus()
    if (this.props.evaluateWord(e.target.elements["word"].value)){
      e.target.elements["word"].value = ''
    }
  }

  wordInputDraw = (input) => {
    // this.wordInput = input
    // input.focus()
  }


  render(){
    const word = this.props.currentWord
    const peekItem = this.state.peekCounter > 0 ? <div className='fadeOut' key={this.state.peekCounter}>{word}</div> : null
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <div>
            <input type='text' id="word" ref={this.wordInputBound}></input>
          </div>
          <div>
            <button>Continue</button>
          </div>
          <div>
            <button onClick={this.peekShow}>Peek</button>
            {peekItem}
          </div>
        </form>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
