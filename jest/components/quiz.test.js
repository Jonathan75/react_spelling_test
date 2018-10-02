import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Quiz from '../../src/components/quiz'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
// const removeWordMock = jest.fn()
// const addWordMock = jest.fn()
// const startQuizMock = jest.fn()
const props = {
  currentWord:'bob',
  stopQuiz: jest.fn(),
  evaluateWord: jest.fn()
}

it('can renders', () => {
  wrapper = shallow(<Quiz {...props}/>)
  expect(wrapper).toBeDefined()
})

describe('peek button', () => {
  it('shows the current text', () => {
    wrapper = shallow(<Quiz {...props}/>)
    const peekButton = wrapper.find('.jest-peek-button')
    peekButton.simulate('click', {preventDefault: jest.fn()})
    expect(wrapper.text()).toContain(props.currentWord)
  })
})

// it('has a word list with the removeWord callback', () => {
//   wrapper = shallow(<QuizBuilder {...props}/>)
//   const wordList = wrapper.find(WordList)
//   expect(wordList).toBeDefined()
//   wordList.prop('removeWord')('foo')
//   expect(removeWordMock).toHaveBeenCalledWith('foo')
// })
