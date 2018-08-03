import React, { Component } from 'react'

class WordList extends Component {

  render() {
    const wordList = this.props.wordList
    const listItems = wordList.map((word, i) =>
      <li key={`${i}-${word}`}>
        {word}
        <button className='delete-word' onClick={()=> this.props.removeWord(word)}>Delete</button>
      </li>
    )

    return(
      <ul>
        {listItems}
      </ul>
    )
  }
}

export default WordList
