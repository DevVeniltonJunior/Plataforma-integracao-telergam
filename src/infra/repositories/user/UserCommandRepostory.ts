import { UserDTO } from '@/domain/dtos'
import { User } from '@/domain/entities'
import { IUserCommandRepository } from '@/domain/protocols'
import { UserId } from '@/domain/valueObjects'
import { UserAdapter } from '@/infra/adapters'
import { PrismaClient } from '@prisma/client'

export class UserCommandRepository implements IUserCommandRepository {
  private readonly _repository = new PrismaClient()

  async create (data: User): Promise<User> {
    const model = UserAdapter.toModel(data)

    delete (<any>model).id

    const createdUser = await this._repository.user.create({ data: { name: model.name, email: model.email } })

    return UserAdapter.toEntity(createdUser)
  }

  async update (id: UserId, data: UserDTO): Promise<void> {
    const partialModel = UserAdapter.toPartialModel(data)

    delete (<any>partialModel).id

    this._repository.user.update({ where: { id: id.toNumber() }, data: partialModel})
  }
  
  async delete (id: UserId): Promise<void> {
    this._repository.user.delete({ where: { id: id.toNumber() }})
  }
}
