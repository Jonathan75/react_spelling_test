import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from  'enzyme-adapter-react-16'
import App from 'src/App.js'
// import { MemoryRouter } from 'react-router-dom'


Enzyme.configure({ adapter: new Adapter() })
let wrapper

describe('#render', () => {
 global.FORM_ID = 1

   // beforeEach(() => {
   //   wrapper = shallow(
   //       <App />
   //   )
   // })

   it('Should render App Component', () => {
     expect(wrapper).toBeDefined()
   })

   it('Should render 3 Routes', () => {
     expect(wrapper.find('Route')).toHaveLength(3)
   })

   it('Should render The Nav Menu', () => {
     expect(wrapper.find('Menu')).toHaveLength(1)
   })

 })
