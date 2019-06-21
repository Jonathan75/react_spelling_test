import React from 'react'
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library'
import 'jest-dom/extend-expect'
import Quiz from '../../src/components/quiz'

afterEach(cleanup)
const evaluateWordMock = jest.fn(()=> true)
const props = {
  currentWord:'bob',
  stopQuiz: jest.fn(),
  evaluateWord: evaluateWordMock
}

it('Continue with a word that is spelled correctly', () => {
  const {getByText, getByTestId, getByLabelText, container, asFragment} = render(<Quiz {...props} />)
  const wordInput = getByLabelText('word-input')
  fireEvent.change(wordInput, { target: { value: 'bob' } })
  expect(wordInput.value).toBe('bob')
  fireEvent.click(getByText(/Continue/i))
  expect(evaluateWordMock).toHaveBeenCalledTimes(1)
  expect(evaluateWordMock).toHaveBeenCalledWith('bob')
  expect(wordInput).toHaveTextContent('')
})
