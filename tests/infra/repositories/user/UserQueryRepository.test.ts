import { User } from '@/domain/entities'
import { Email, UserId } from '@/domain/valueObjects'
import { DataNotExists } from '@/infra/exceptions'
import { UserCommandRepository, UserQueryRepository } from '@/infra/repositories'
import { userEntityFixture } from '@/tests/fixtures'

describe('[Repository] User Query', () => {
  const userCommandRepository = new UserCommandRepository()
  const userQueryRepository = new UserQueryRepository()
  let createdUser: User
  let anotherId: UserId
  
  beforeAll(async () => {
    createdUser = await userCommandRepository.create(userEntityFixture)
    anotherId
  })

  afterAll(async () => {
    await userCommandRepository.delete(createdUser.getId())
    await userCommandRepository.delete(anotherId)
  })

  it('Should be able to find by id an user without throw any error', async () => {
    const user = await userQueryRepository.findById(createdUser.getId())

    expect(() => user).not.toThrow()
    expect(user.getName()).toEqual(createdUser.getName())
  })

  it('Should be able to find by email an user without throw any error', async () => {
    const user = await userQueryRepository.findByEmail(createdUser.getEmail())

    expect(() => user).not.toThrow()
    expect(user.getId()).toEqual(createdUser.getId())
  })

  it('Should be able to find many users without throw any error', async () => {
    const generate = Math.random().toString(4)
    const fixture = Object.assign(userEntityFixture, { _email: new Email('another' + generate + '@email.com') })
    const anotherUser = await userCommandRepository.create(fixture)
    anotherId = anotherUser.getId()
    const ids = [createdUser.getId(), anotherUser.getId()]
    const users = await userQueryRepository.findMany(ids)

    expect(() => users).not.toThrow()
    expect(users.length).toBeGreaterThan(0)
  })

  it('Should be able to find all users without throw any error', async () => {
    const users = await userQueryRepository.findAll()

    expect(() => users).not.toThrow()
    expect(users.length).toBeGreaterThan(0)
  })

  it('Should be able to throw an error when trying to find by id if user not exists', async () => {
    await expect(userQueryRepository.findById(new UserId(9999))).rejects.toThrow(new DataNotExists('User'))
  })

  it('Should be able to throw an error when trying to find by email if user not exists', async () => {
    await expect(userQueryRepository.findByEmail(new Email('another' + Math.random().toString(4) + '@email.com'))).rejects.toThrow(new DataNotExists('User'))
  })

  it('Should be able to throw an error when trying to find many users if user not exists', async () => {
    await expect(userQueryRepository.findMany([new UserId(9999)])).rejects.toThrow(new DataNotExists('User'))
  })
})
