import { Password } from '@/domain/entities'
import { ICreatePassword, IPasswordCommandRepository } from '@/domain/protocols'

export class CreatePassword implements ICreatePassword {
  constructor(private readonly _repository: IPasswordCommandRepository) {}
  public async execute (entity: Password): Promise<Password> {
    return await this._repository.create(entity)
  }
}
