import { User } from '@/domain/entities'
import { ICreateUser, IUserCommandRepository } from '@/domain/protocols'

export class CreateUser implements ICreateUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  public async execute (entity: User): Promise<User> {
    return await this._repository.create(entity)
  }
}
