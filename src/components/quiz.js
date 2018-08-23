import React, { Component } from 'react'

class Quiz extends Component {
  constructor(props) {
  super(props);
  //this.state = { counter: 0 };
  //this.handleClick = this.handleClick.bind(this);
  this.state = { peek: false}
  }

  componentDidMount(){
     this.nameInput.focus()
  }

  peekShow = () => {
    this.setState(peek: true)
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
          <div>
            <input type='text' id="word" ref={(input) => { this.nameInput = input }}></input>
          </div>
          <div>
            <button onClick={this.peek}>Peek</button>
            <div style={this.state.showMyComponent ? {} : { display: 'none' }}>{this.props.currentWord}</div>
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
