import { PasswordStatus } from "@/domain/valueObjects"

const validValues = ['active', 'discontinued']
const invalidValues = ['deleted', 'updated']

describe('[Value Object] Password Value', () => {
  validValues.map(value => {
    it(`Should be able to create a new PasswordStatus with value: ${value}`, () => {
      expect(() => new PasswordStatus(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new PasswordStatus with value: ${value}`, () => {
      expect(() => new PasswordStatus(value)).toThrow()
    })
  })

  it('Should be able to return a string', () => {
    const sut = new PasswordStatus('active')
    expect(sut.toString()).toBe('active')
    expect(typeof sut.toString()).toBe('string')
  })
})