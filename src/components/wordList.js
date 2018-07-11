import React, { Component } from 'react'

class WordList extends Component {

  render() {
    const wordlist = this.props.wordlist
    const listItems = wordlist.map((word, i) =>
      <li key={`${i}-${word}`}>{word}</li>
    )

    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}

export default WordList
