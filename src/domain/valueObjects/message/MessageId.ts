import { InvalidParam } from "@/domain/exception"

export class MessageId {
  constructor(private readonly value: number) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('MessageId')
  }

  private isValid(value: number): boolean {
    if(value <= 0 || value >= 9999999999) return false
    return true
  }

  public toNumber(): number {
    return this.value
  }
}