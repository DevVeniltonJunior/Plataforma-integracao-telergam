import { Password } from '@/domain/entities'
import { TPassword } from '@/domain/protocols'
import { PasswordId, PasswordStatus, PasswordValue, UserId } from '@/domain/valueObjects'

export class PasswordAdapter {
  public static toEntity (model: TPassword.Model): Password {
    return new Password(
      new PasswordId(model.id),
      new UserId(model.user_id),
      new PasswordValue(model.value),
      new PasswordStatus(model.status)
    )
  }

  public static toModel (entity: Password): TPassword.Model {
    return entity.toJson()
  }
}