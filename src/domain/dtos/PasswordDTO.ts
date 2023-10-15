import { UserId, PasswordId, PasswordValue, PasswordStatus } from '@/domain/valueObjects'
import { TPassword } from '@/domain/protocols'

export class PasswordDTO {
  constructor(
    private readonly _id: PasswordId,
    private readonly _status?: PasswordStatus,

  ) {}

  public getId(): PasswordId {
    return this._id
  }

  public getStatus(): PasswordStatus | undefined {
    return this._status
  }

  public toJson(): TPassword.DTO {
    return {
      id: this._id.toNumber(),
      status: this._status ? this._status.toString() : undefined
    }
  }
}
