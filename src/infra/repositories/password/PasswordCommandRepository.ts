import { Password } from '@/domain/entities'
import { IPasswordCommandRepository } from '@/domain/protocols'
import { PasswordId, PasswordStatus } from '@/domain/valueObjects'
import { PasswordAdapter } from '@/infra/adapters'
import { PrismaClient } from '@prisma/client'

export class PasswordCommandRepository implements IPasswordCommandRepository {
  private readonly _repository = new PrismaClient()

  async create (data: Password): Promise<Password> {
    const model = PasswordAdapter.toModel(data)

    delete (<any>model).id

    const createdPassword = await this._repository.password.create({ data: { ...model } })

    return PasswordAdapter.toEntity(createdPassword)
  }

  async update (id: PasswordId, status: PasswordStatus): Promise<void> {
    await this._repository.password.update({ where: { id: id.toNumber() }, data: { status: status.toString() } })
  }

}