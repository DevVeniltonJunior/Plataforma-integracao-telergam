import { UserId, PasswordId, PasswordValue, PasswordStatus } from '@/domain/valueObjects'
import { TPassword } from '@/domain/protocols'

export class Password {
  constructor(
    private readonly _id: PasswordId,
    private readonly _userId: UserId,
    private readonly _value: PasswordValue,
    private readonly _status: PasswordStatus,

  ) {}

  public getId(): PasswordId {
    return this._id
  }

  public getUseId(): UserId {
    return this._userId
  }

  public getValue(): PasswordValue {
    return this._value
  }

  public getStatus(): PasswordStatus {
    return this._status
  }

  public toJson(): TPassword.Entity {
    return {
      id: this._id.toNumber(),
      user_id: this._userId.toNumber(),
      value: this._value.toString(),
      status: this._status.toString()
    }
  }
}
