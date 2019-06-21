import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-localstorage-mock'  //https://github.com/clarkbw/jest-localstorage-mock
import App from '../src/App'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const wordListArray = ['left', 'right', 'up', 'down']
const props = { wordList: wordListArray }
localStorage.setItem("wordList", JSON.stringify(wordListArray))

beforeEach(() => {
  wrapper = shallow(<App {...props}/>)
})

it('call the removeWord', () => {
  expect(wrapper.state().wordList).toEqual(wordListArray)
  expect(wrapper).toBeDefined()
  wrapper.instance().removeWord('left')
  expect(wrapper.instance().state.wordList).toEqual(['right', 'up', 'down'])
  expect(localStorage.setItem).toHaveBeenLastCalledWith('wordList', "[\"right\",\"up\",\"down\"]")
})

it('renders quizbuilder', () => {
  const quizBuilder = wrapper.find('QuizBuilder')
  expect(quizBuilder).toBeDefined()
  expect(quizBuilder.props().wordList).toBeDefined()
  expect(quizBuilder.props().addWord).toBeDefined()
  expect(quizBuilder.props().startQuiz).toBeDefined()
  expect(quizBuilder.props().removeWord).toBeDefined()
})
