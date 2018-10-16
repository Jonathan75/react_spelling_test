import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Quiz from '../../src/components/quiz'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const evaluateWord = jest.fn(()=> true)
const props = {
  currentWord:'bob',
  stopQuiz: jest.fn(),
  evaluateWord: evaluateWord
}

it('renders', () => {
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

describe('on a quiz word', () => {
  it('the peek text is not initially shown', () => {
    wrapper = shallow(<Quiz {...props}/>)
    expect(wrapper.text()).not.toContain(props.currentWord)
  })
})

describe('on choosing a correct spelling', () => {
  it('the word is removed', () => {
    wrapper = shallow(<Quiz {...props}/>)
    const word_input = wrapper.find('.jest-word-input')
    word_input.simulate('change', { target: { value: 'incorrect' } } )
    console.log("word_input: ", word_input.text() )
    const continueButton = wrapper.find('.jest-continue-button')
    continueButton.simulate('click', { preventDefault: jest.fn() } )
    console.log("word_input: ", word_input.text() )
    expect(word_input.value).toBe(undefined)
  })

  it('evaluateWord is called', () => {
    wrapper = shallow(<Quiz {...props}/>)
    const continueButton = wrapper.find('.jest-continue-button')
    const currentWord = props.currentWord
    // debugger
    const word_input = wrapper.find('.jest-word-input')
    word_input.simulate('change', { target: { value: 'new word' } })
    console.log("current word: ", word_input.text())

    // expect(word_input.text()).toEqual('new word')
    continueButton.simulate('click', { preventDefault: jest.fn() } )
    expect(word_input.text()).toEqual('')
    expect(wrapper.text()).not.toContain(props.currentWord)
  })
})

describe('on choosing an incorrect spelling', () => {
  it('the word is not removed', () => {
    wrapper = shallow(<Quiz {...props}/>)
    const continueButton = wrapper.find('.jest-continue-button')
    continueButton.simulate('click', { preventDefault: jest.fn() } )
    const word_input = wrapper.find('.jest-word-input')
    console.log("word_input: ", word_input.text() )
    expect(word_input.value).not.toBe('')
  })

  it('evaluateWord is called', () => {
    wrapper = shallow(<Quiz {...props}/>)
    const continueButton = wrapper.find('.jest-continue-button')
    continueButton.simulate('click', { preventDefault: jest.fn() } )
    const word_input = wrapper.find('.jest-word-input')
    expect(wrapper.text()).not.toContain(props.currentWord)
  })
})
