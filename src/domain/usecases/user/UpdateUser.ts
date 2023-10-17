import { UserDTO } from '@/domain/dtos'
import { IUpdateUser, IUserCommandRepository } from '@/domain/protocols'
import { UserId } from '@/domain/valueObjects'

export class UpdateUser implements IUpdateUser {
  constructor(private readonly _repository: IUserCommandRepository) {}
  public async execute (id: UserId, data: UserDTO): Promise<void> {
    await this._repository.update(id, data)
  }
}
