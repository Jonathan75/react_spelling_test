import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const props = {wordList:['left', 'right', 'up', 'down']}
const setItemMock = jest.fn()

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}
global.localStorage = localStorageMock

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('call the removeWord', () => {
  wrapper = shallow(<App {...props}/>)
  expect(wrapper).toBeDefined()
  wrapper.removeWord('left')
  expect(setItemMock).toHaveBeenCalledWith({wordList:['right', 'up', 'down']})
})
