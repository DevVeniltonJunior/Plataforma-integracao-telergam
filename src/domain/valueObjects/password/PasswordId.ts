import { InvalidParam } from "@/domain/exception"

export class PasswordId {
  constructor(private readonly value: number) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('PasswordId')
  }

  private isValid(value: number): boolean {
    if(value <= 0 || value >= 9999999999) return false
    return true
  }

  public toNumber(): number {
    return this.value
  }
}