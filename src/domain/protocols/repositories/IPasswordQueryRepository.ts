import { Password } from '@/domain/entities'
import { PasswordId, UserId } from '@/domain/valueObjects'

export interface IPasswordQueryRepository {
  findActivePassword: (id: UserId) => Promise<Password>
  findById: (id: PasswordId) => Promise<Password>
}