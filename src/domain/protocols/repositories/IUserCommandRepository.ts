import { User } from '@/domain/entities'
import { UserDTO } from '@/domain/dtos'
import { UserId } from '@/domain/valueObjects'

export interface IUserCommandRepository {
  create: (data: User) => Promise<User>
  update: (id: UserId, data: UserDTO) => Promise<void>
  delete: (id: UserId) => Promise<void>
}