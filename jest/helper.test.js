import { compareWords } from '../src/helper'

describe('#compareWords', () => {
  describe('when words are the same', () => {
    it('is true', () => {
      expect(compareWords('A','A')).toBeTruthy()
    })
  })

  describe('when case is different', () => {
    it('is true', () => {
      expect(compareWords('A','a')).toBeTruthy()
    })
  })

  describe('when words are different', () => {
    it('is false', () => {
      expect(compareWords('A','B')).toBeFalsy()
    })
  })
})
