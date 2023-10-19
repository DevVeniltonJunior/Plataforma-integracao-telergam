import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { TUser } from '@/domain/protocols'
import { Email, UserId, UserName } from '@/domain/valueObjects'
import { ChatAdapter } from '@/infra/adapters'

export class UserAdapter {
  public static toEntity (model: TUser.Model): User {
    return new User(
      new UserId(model.id),
      new UserName(model.name),
      new Email(model.email),
      model.chats ? model.chats.map(chat => ChatAdapter.toEntity(chat)) : undefined
    )
  }

  public static toModel (entity: User): TUser.Model {
    return entity.toJson()
  }

  public static toPartialModel (entity: UserDTO): TUser.DTO {
    return entity.toJson()
  }

  public static toDTO (dto: TUser.DTO): UserDTO {
    return new UserDTO(
      new UserId(dto.id),
      dto.name ? new UserName(dto.name) : undefined,
      dto.email ? new Email(dto.email) : undefined,
    )
  }
}