import { InvalidParam } from "@/domain/exception"

export class ChatName {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('ChatName')
  }

  private isValid(value: string): boolean {
    if(value.length < 4 || value.length > 9999999999) return false
    return true
  }

  public toString(): string {
    return this.value
  }
}