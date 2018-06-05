import React, { Component } from 'react'

class WordList extends Component {
	render() {
		return(
			<ul>
				{this.props.wordList.map((word, i) => <li key={`${i}-${word}`}>{word}</li>)}
			</ul>
		)
	}
}

export default WordList
