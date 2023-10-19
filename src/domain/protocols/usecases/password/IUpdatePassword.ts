import { PasswordId, PasswordStatus } from '@/domain/valueObjects'

export interface IUpdatePassword {
  execute: (id: PasswordId, status: PasswordStatus) => Promise<void>
}
