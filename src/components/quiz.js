import React, { Component } from 'react'

class Quiz extends Component {
  state = {peek: false}

  componentDidMount(){
     this.nameInput.focus()
  }

  peekShow = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({peek: true})
  }

  onSubmitWord = (e) => {
    e.preventDefault()
    this.nameInput.focus()
    if (this.props.evaluateWord(e.target.elements["word"].value)){
      e.target.elements["word"].value = ''
    }
  }

  render(){
    let word = this.props.currentWord
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <div>
            <input type='text' id="word" ref={(input) => { this.nameInput = input }}></input>
          </div>
          <div>
            <button>Continue</button>
          </div>
          <div>
            <button onClick={this.peekShow}>Peek</button>
            <div className={this.state.peek ? 'anne fadeOut' : ''}>{word}</div>
          </div>
        </form>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
