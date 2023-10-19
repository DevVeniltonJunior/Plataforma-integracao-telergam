import { User } from "@/domain/entities";
import { IUserQueryRepository } from "@/domain/protocols";
import { Email, UserId } from '@/domain/valueObjects'
import { UserAdapter } from '@/infra/adapters'
import { PrismaClient } from '@prisma/client'
import { DataNotExists } from "@/infra/exceptions";

export class UserQueryRepository implements IUserQueryRepository {
  private readonly _repository = new PrismaClient()

  async findById (id: UserId): Promise<User> {
    const user = await this._repository.user.findUnique({ where: { id: id.toNumber() } })

    if(!user) throw new DataNotExists("User")

    return UserAdapter.toEntity(user)
  }
  async findByEmail (email: Email): Promise<User> {
    const user = await this._repository.user.findUnique({ where: { email: email.toString() } })

    if(!user) throw new DataNotExists("User")

    return UserAdapter.toEntity(user)
  }
  async findMany (ids: UserId[]): Promise<User[]> {
    const _ids = ids.map(id => id.toNumber())
    const users = await this._repository.user.findMany({ where: { id: { in: _ids } } })

    if(!users || users.length <= 0) throw new DataNotExists("User")

    return users.map(user => UserAdapter.toEntity(user))
  }
  async findAll (): Promise<User[]> {
    const users = await this._repository.user.findMany()

    if(!users || users.length <= 0) throw new DataNotExists("User")

    return users.map(user => UserAdapter.toEntity(user))
  }
}