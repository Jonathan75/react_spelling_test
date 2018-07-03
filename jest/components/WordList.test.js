import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import WordList from '../../src/components/WordList'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WordList wordList={["bob"]}/>, div)
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
