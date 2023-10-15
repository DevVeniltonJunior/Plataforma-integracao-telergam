import { InvalidParam } from "@/domain/exception"

const validValue = ['active', 'discontinued']

export class PasswordStatus {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('PasswordId')
  }

  private isValid(value: string): boolean {
    const test = validValue.includes(value)
    return test
  }

  public toString(): string {
    return this.value
  }
}