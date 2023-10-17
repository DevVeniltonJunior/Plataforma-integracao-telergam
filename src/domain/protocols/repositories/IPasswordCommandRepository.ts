import { Password } from '@/domain/entities'
import { PasswordDTO } from '@/domain/dtos'
import { PasswordId } from '@/domain/valueObjects'

export interface IPasswordCommandRepository {
  create: (data: Password) => Promise<Password>
  update: (id: PasswordId, data: PasswordDTO) => Promise<void>
}