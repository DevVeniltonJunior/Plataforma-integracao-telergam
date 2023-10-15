import { MessageText } from "@/domain/valueObjects"

describe('[Value Object] Message Text', () => {
  it('Should be able to create a new MessageText with any valid value', () => {
    expect(() => new MessageText('any_value')).not.toThrow()
  })

  it('Should be able to throw when trying to create a new MessageText with an invalid value', () => {
    expect(() => new MessageText('')).toThrow()
  })

  it('Should be able to return a string', () => {
    const sut = new MessageText('Renato')
    expect(sut.toString()).toBe('Renato')
    expect(typeof sut.toString()).toBe('string')
  })
})