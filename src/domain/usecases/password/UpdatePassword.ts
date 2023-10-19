import { IUpdatePassword, IPasswordCommandRepository } from '@/domain/protocols'
import { PasswordId, PasswordStatus } from '@/domain/valueObjects'

export class UpdatePassword implements IUpdatePassword {
  constructor(private readonly _repository: IPasswordCommandRepository) {}
  public async execute (id: PasswordId, status: PasswordStatus): Promise<void> {
    await this._repository.update(id, status)
  }
}
