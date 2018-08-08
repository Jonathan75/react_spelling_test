import React, { Component } from 'react'

class WordList extends Component {

  render() {
    const wordList = this.props.wordList
    const listItems = wordList.map((word, i) =>
      <li key={`${i}-${word}`}>
        {word} &nbsp;
        <i className='delete-word fa fa-trash' onClick={()=> this.props.removeWord(word)} />
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
