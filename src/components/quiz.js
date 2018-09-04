import React, { Component } from 'react'

class Quiz extends Component {
  // constructor(props) {
  //   super(props)
  //   //this.handleClick = this.handleClick.bind(this);
  //   this.state = {peek: false}
  // }

  state = {peek: false}

  componentDidMount(){
     this.nameInput.focus()
  }

  peekShow = (e) => {
    e.preventDefault()
    // debugger
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
    return(
      <div>
        <form onSubmit={this.onSubmitWord}>
          <div>
            <input type='text' id="word" ref={(input) => { this.nameInput = input }}></input>
          </div>
          <div>
            <button onClick={this.peekShow}>Peek</button>
            <div style={this.state.peek ? {} : { display: 'none' }}>{this.props.currentWord}</div>
            <div>peek is</div>
            <div>{`${this.state.peek} and ${this.props.currentWord}`}</div>
          </div>
          <div>
            <button>Continue</button>
          </div>

        </form>
        <button onClick={this.props.stopQuiz}>Exit Test</button>
      </div>
    )
  }
}

export default Quiz
