import { Password } from '@/domain/entities'
import { PasswordId, PasswordStatus } from '@/domain/valueObjects'

export interface IPasswordCommandRepository {
  create: (data: Password) => Promise<Password>
  update: (id: PasswordId, status: PasswordStatus) => Promise<void>
}