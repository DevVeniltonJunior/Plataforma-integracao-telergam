import { Password } from '@/domain/entities'
import { PasswordId, PasswordStatus, PasswordValue, UserId } from '@/domain/valueObjects'
import { passwordModelFixture } from '../model/PasswordModel'

export const passwordEntityFixture = new Password(
  new PasswordId(passwordModelFixture.id),
  new UserId(passwordModelFixture.userId),
  new PasswordValue(passwordModelFixture.value),
  new PasswordStatus(passwordModelFixture.status)
)
