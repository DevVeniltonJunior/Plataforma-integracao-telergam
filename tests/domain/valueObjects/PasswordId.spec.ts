import { PasswordId } from "@/domain/valueObjects"

const validValues = [1, 50, 100]
const invalidValues = [-10, 0, 99999999999999999999999]

describe('[Value Object] Password Id', () => {
  validValues.map(value => {
    it(`Should be able to create a new PasswordId with value: ${value}`, () => {
      expect(() => new PasswordId(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new PasswordId with value: ${value}`, () => {
      expect(() => new PasswordId(value)).toThrow()
    })
  })

  it('Should be able to return a number', () => {
    const sut = new PasswordId(1)
    expect(sut.toNumber()).toBe(1)
    expect(typeof sut.toNumber()).toBe('number')
  })
})