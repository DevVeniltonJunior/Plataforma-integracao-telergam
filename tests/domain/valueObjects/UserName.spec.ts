import { UserName } from "@/domain/valueObjects"

const validValues = ['John', 'Robert', 'Bob']
const invalidValues = ['a', 'ra', '']

describe('[Value Object] User Name', () => {
  validValues.map(value => {
    it(`Should be able to create a new UserName with value: ${value}`, () => {
      expect(() => new UserName(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new UserName with value: ${value}`, () => {
      expect(() => new UserName(value)).toThrow()
    })
  })

  it('Should be able to return a string', () => {
    const sut = new UserName('Renato')
    expect(sut.toString()).toBe('Renato')
    expect(typeof sut.toString()).toBe('string')
  })
})