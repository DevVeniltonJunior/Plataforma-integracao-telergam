import { UserDTO } from '@/domain/dtos'
import { UserId } from '@/domain/valueObjects'

export interface IUpdateUser {
  execute: (id: UserId, entity: UserDTO) => Promise<void>
}
