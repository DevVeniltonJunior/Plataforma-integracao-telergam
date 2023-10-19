import { PasswordId, PasswordStatus, UserId } from '@/domain/valueObjects'
import { PasswordCommandRepository, UserCommandRepository } from '@/infra/repositories/'
import { passwordEntityFixture, userEntityFixture } from '@/tests/fixtures'

describe('[Repository] Password Command', () => {

  let userId: UserId
  let passwordId: PasswordId
  const passwordCommandRepository = new PasswordCommandRepository()
  const userCommandRepository = new UserCommandRepository()

  beforeAll(async () => {
    const user = await userCommandRepository.create(userEntityFixture)

    userId = user.getId()
  })

  afterAll(async () => {
    await userCommandRepository.delete(userId)
  })

  it('Should be able to create a new password without throw any error', async () => {
    const password = await passwordCommandRepository.create(Object.assign(passwordEntityFixture, { userId }))

    expect(() => password).not.toThrow()

    passwordId = password.getId()
  })

  it('Should be able to update a password without throw any error', async () => {
    expect(async () => await passwordCommandRepository.update(passwordId, new PasswordStatus('discontinued'))).not.toThrow()
  })
})