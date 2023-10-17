import { PasswordDTO } from '@/domain/dtos'
import { PasswordId } from '@/domain/valueObjects'

export interface IUpdatePassword {
  execute: (id: PasswordId, entity: PasswordDTO) => Promise<void>
}
