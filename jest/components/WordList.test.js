import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WordList from '../../src/components/WordList'

Enzyme.configure({ adapter: new Adapter() })
let wrapper
const props = {words:['left', 'right', 'up', 'down']}

it('can renders', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WordList words={["bob"]}/>, div)
})

it('can renders a list of words', () => {
  wrapper = shallow(<WordList {...props}/>)
  expect(wrapper).toBeDefined()
  expect(wrapper.find("li")).toHaveLength(4)
})




// describe('<WordList />', () => {
  // let wrapper
  // const props = {wordList:['hello']}

  // beforeEach(() => {
  // })

  // it('renders three <Foo /> components', () => {
  //   wrapper = shallow(<WorkList {...props}/>)
  //   expect(wrapper).toBeDefined()
  //   // expect(wrapper.find(Foo)).to.have.length(3)
  // })
  //
  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<MyComponent />)
  //   expect(wrapper.find('.icon-star')).to.have.length(1)
  // })
  //
  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   ))
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true)
  // })
  //
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy()
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />)
  //   wrapper.find('button').simulate('click')
  //   expect(onButtonClick).to.have.property('callCount', 1)
  // })
// })
