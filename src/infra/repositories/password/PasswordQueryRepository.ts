import { Password } from '@/domain/entities'
import { IPasswordQueryRepository } from '@/domain/protocols'
import { PasswordId, UserId } from '@/domain/valueObjects'
import { PasswordAdapter } from '@/infra/adapters'
import { DataNotExists } from '@/infra/exceptions'
import { PrismaClient } from '@prisma/client'

export class PasswordQueryRepository implements IPasswordQueryRepository {
  private readonly _repository = new PrismaClient()

  async findActivePassword (id: UserId): Promise<Password> {
    const password = await this._repository.password.findFirst({ where: { user_id: id.toNumber(), status: 'active' } })
    
    if (!password) throw new DataNotExists('Password')

    return PasswordAdapter.toEntity(password)
  }

  async findById (id: PasswordId): Promise<Password> {
    const password = await this._repository.password.findUnique({ where: { id: id.toNumber() } })

    if (!password) throw new DataNotExists('Password')

    return PasswordAdapter.toEntity(password)
  }
}
