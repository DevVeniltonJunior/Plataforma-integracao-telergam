import { ChatId } from "@/domain/valueObjects"

const validValues = [1, 50, 100]
const invalidValues = [-10, 0, 99999999999999999999999]

describe('[Value Object] Chat Id', () => {
  validValues.map(value => {
    it(`Should be able to create a new ChatId with value: ${value}`, () => {
      expect(() => new ChatId(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new ChatId with value: ${value}`, () => {
      expect(() => new ChatId(value)).toThrow()
    })
  })

  it('Should be able to return a number', () => {
    const sut = new ChatId(1)
    expect(sut.toNumber()).toBe(1)
    expect(typeof sut.toNumber()).toBe('number')
  })
})