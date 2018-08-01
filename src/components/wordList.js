import React, { Component } from 'react'

class WordList extends Component {

  render() {
    const words = this.props.words
    const listItems = words.map((word, i) =>
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
