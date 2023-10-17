import { Chat } from '@/domain/entities'
import { ICreateChat, IChatCommandRepository } from '@/domain/protocols'

export class CreateChat implements ICreateChat {
  constructor(private readonly _repository: IChatCommandRepository) {}
  public async execute (entity: Chat): Promise<Chat> {
    return await this._repository.create(entity)
  }
}
