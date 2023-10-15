import { PasswordValue } from "@/domain/valueObjects"

describe('[Value Object] User Name', () => {
  it('Should be able to create a new PasswordValue with any valid value', () => {
    expect(() => new PasswordValue('any_value')).not.toThrow()
  })

  it('Should be able to throw when trying to create a new PasswordValue with an invalid value', () => {
    expect(() => new PasswordValue('')).toThrow()
  })

  it('Should be able to return a string', () => {
    const sut = new PasswordValue('Renato')
    expect(sut.toString()).toBe('Renato')
    expect(typeof sut.toString()).toBe('string')
  })
})