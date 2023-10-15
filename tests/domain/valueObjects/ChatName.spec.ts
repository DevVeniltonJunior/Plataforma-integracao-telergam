import { ChatName } from "@/domain/valueObjects"

const validValues = ['John', 'Robert', 'Bobby']
const invalidValues = ['a', 'ra', '']

describe('[Value Object] Chat Name', () => {
  validValues.map(value => {
    it(`Should be able to create a new ChatName with value: ${value}`, () => {
      expect(() => new ChatName(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new ChatName with value: ${value}`, () => {
      expect(() => new ChatName(value)).toThrow()
    })
  })

  it('Should be able to return a string', () => {
    const sut = new ChatName('Renato')
    expect(sut.toString()).toBe('Renato')
    expect(typeof sut.toString()).toBe('string')
  })
})