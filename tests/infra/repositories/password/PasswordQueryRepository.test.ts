import { PasswordId, PasswordStatus, UserId } from '@/domain/valueObjects'
import { DataNotExists } from '@/infra/exceptions'
import { PasswordCommandRepository, PasswordQueryRepository, UserCommandRepository } from '@/infra/repositories/'
import { passwordEntityFixture, userEntityFixture } from '@/tests/fixtures'

describe('[Repository] Password Query', () => {
  
  let userId: UserId
  let passwordId: PasswordId
  const passwordCommandRepository = new PasswordCommandRepository()
  const passwordQueryRepository = new PasswordQueryRepository()
  const userCommandRepository = new UserCommandRepository()

  beforeAll(async () => {
    const user = await userCommandRepository.create(userEntityFixture)

    userId = user.getId()

    const password = await passwordCommandRepository.create(Object.assign(passwordEntityFixture, { _userId: userId }))

    passwordId = password.getId()
  })

  it('Should be able to find an active password without throw any error', async () => {
    	await expect(() => passwordQueryRepository.findActivePassword(userId)).not.toThrow(new DataNotExists('Password'))
  })

  it('Should be able to find a password by id without throw any error', async () => {
    	await expect(() => passwordQueryRepository.findById(passwordId)).not.toThrow(new DataNotExists('Password'))
  })

  it('Should be able to throw an error when trying to find a active password if password not exists', async () => {
    await passwordCommandRepository.update(passwordId, new PasswordStatus('discontinued'))

    await expect(() => passwordQueryRepository.findActivePassword(userId)).rejects.toThrow(new DataNotExists('Password'))
  })

  it('Should be able to throw an error when trying to find a password by id if password not exists', async () => {
    	await expect(() => passwordQueryRepository.findById(new PasswordId(9999))).rejects.toThrow(new DataNotExists('Password'))
  })
})
