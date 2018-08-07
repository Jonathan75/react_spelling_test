import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const wordListArray = ['left', 'right', 'up', 'down']
const props = { wordList: wordListArray }
const setItemMock = jest.fn()
const getItemMock = jest.fn()
getItemMock.mockReturnValue(JSON.stringify(wordListArray))

const localStorageMock = {
  getItem: getItemMock,
  setItem: setItemMock,
  clear: jest.fn()
}
global.localStorage = localStorageMock

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('call the removeWord', () => {
  wrapper = shallow(<App {...props}/>)
  expect(wrapper.state().wordList).toEqual(wordListArray)
  expect(wrapper).toBeDefined()
  wrapper.instance().removeWord('left')
  expect(wrapper.instance().state.wordList).toEqual(['right', 'up', 'down'])
  expect(setItemMock).toHaveBeenCalledWith('wordList', "[\"right\",\"up\",\"down\"]")
})
