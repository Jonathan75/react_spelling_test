import React, { Component } from 'react'

class WordList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const wordListItems = this.props["wordList"].map((word) => <li>{word}</li>)
    return(
      <ul>
      {wordListItems}
      </ul>
    )
  }
}

export default WordList
