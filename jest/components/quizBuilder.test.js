import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import QuizBuilder from '../../src/components/quizBuilder'
import WordList from '../../src/components/wordList'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const removeWordMock = jest.fn()
const addWordMock = jest.fn()
const startQuizMock = jest.fn()
const props = {
  addWord: addWordMock,
  removeWord: removeWordMock,
  startQuiz: startQuizMock,
  wordList: ['left', 'right', 'up', 'down']
}

it('can renders', () => {
  wrapper = shallow(<QuizBuilder {...props}/>)
  expect(wrapper).toBeDefined()
})


it('has a word list with the removeWord callback', () => {
  wrapper = shallow(<QuizBuilder {...props}/>)
  const wordList = wrapper.find(WordList)

  expect(wordList).toBeDefined()
  wordList.prop('removeWord')('foo')
  expect(removeWordMock).toHaveBeenCalledWith('foo')
})
