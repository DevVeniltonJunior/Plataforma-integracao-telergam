import { UserId, UserName, Email } from '@/domain/valueObjects'
import { TUser } from '@/domain/protocols'

export class UserDTO {
  constructor(
    private readonly _id: UserId,
    private readonly _name?: UserName,
    private readonly _email?: Email,
  ) {}

  public getId(): UserId {
    return this._id
  }

  public getName(): UserName | undefined {
    return this._name
  }

  public getEmail(): Email | undefined {
    return this._email
  }

  public toJson(): TUser.DTO {
    return {
      id: this._id.toNumber(),
      name: this._name ? this._name.toString() : undefined,
      email: this._email ? this._email.toString() : undefined
    }
  }
}