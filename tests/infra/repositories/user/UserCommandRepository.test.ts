import { UserDTO } from '@/domain/dtos'
import { UserId, UserName } from '@/domain/valueObjects'
import { UserCommandRepository } from '@/infra/repositories'
import { userEntityFixture, userModelFixture } from '@/tests/fixtures'

describe('[Repository] User Command', () => {
  const userCommandRepository = new UserCommandRepository()
  let _id: UserId

  it('Should be able to create a new user without throw any error', async () => {
    const user = userCommandRepository.create(userEntityFixture)

    expect(async () => await user).not.toThrow()

    _id = (await user).getId()
  })

  it('Should be able to update a user without throw any error', async () => {
    const dto = new UserDTO(_id, new UserName('Renato'))
    const user = await userCommandRepository.update(_id, dto)

    expect(async () => user).not.toThrow()
  })

  it('Should be able to delete a user without throw any error', async () => {
    const user = await userCommandRepository.delete(_id)

    expect(async () => user).not.toThrow()
  })
})
