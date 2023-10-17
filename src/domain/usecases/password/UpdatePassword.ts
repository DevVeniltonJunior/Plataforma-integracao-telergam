import { PasswordDTO } from '@/domain/dtos'
import { IUpdatePassword, IPasswordCommandRepository } from '@/domain/protocols'
import { PasswordId } from '@/domain/valueObjects'

export class UpdatePassword implements IUpdatePassword {
  constructor(private readonly _repository: IPasswordCommandRepository) {}
  public async execute (id: PasswordId, data: PasswordDTO): Promise<void> {
    await this._repository.update(id, data)
  }
}
