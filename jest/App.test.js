import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../src/App'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
// const props = {words:['left', 'right', 'up', 'down']}

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

// describe('When 4 words', () => {
//   // it('has 4 words', () => {
//   //   const div = document.createElement('div')
//   //   ReactDOM.render(<App />, div)
//   // })
//
//   it('can renders a list of words', () => {
//     wrapper = shallow(<App {...props}/>)
//     expect(wrapper).toBeDefined()
//     expect(wrapper.find("li")).toHaveLength(4)
//   })
//
// })
