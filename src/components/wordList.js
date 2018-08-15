import React, { Component } from 'react'

class WordList extends Component {

  render() {
    const wordList = this.props.wordList
    const listItems = wordList.map((word, i) =>
      <li className='word' key={`${i}-${word}`}>
        <span>{word}</span>
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
