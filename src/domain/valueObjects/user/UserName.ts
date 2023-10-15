import { InvalidParam } from "@/domain/exception"

export class UserName {
  constructor(private readonly value: string) {
    if(!this.value || !this.isValid(this.value)) throw new InvalidParam('UserName')
  }

  private isValid(value: string): boolean {
    if(value.length < 3 || value.length > 100) return false
    return true
  }

  public toString(): string {
    return this.value
  }
}