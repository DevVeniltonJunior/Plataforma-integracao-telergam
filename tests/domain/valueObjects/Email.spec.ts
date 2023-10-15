import { Email } from "@/domain/valueObjects"

const validValues = ['John@email.com', 'Robert@email.com.br', 'Bob@email.com']
const invalidValues = ['John@email', 'Robert/@email.com.br', 'Bob.email']

describe('[Value Object] Email', () => {
  validValues.map(value => {
    it(`Should be able to create a new Email with value: ${value}`, () => {
      expect(() => new Email(value)).not.toThrow()
    })
  })

  invalidValues.map(value => {
    it(`Should be able to throw whrn trying to create a new Email with value: ${value}`, () => {
      expect(() => new Email(value)).toThrow()
    })
  })

  it('Should be able to return a string', () => {
    const sut = new Email('John@email.com')
    expect(sut.toString()).toBe('John@email.com')
    expect(typeof sut.toString()).toBe('string')
  })
})