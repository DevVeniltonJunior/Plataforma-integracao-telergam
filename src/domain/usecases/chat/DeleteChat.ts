import { IDeleteChat, IChatCommandRepository } from '@/domain/protocols'
import { ChatId } from '@/domain/valueObjects'

export class DeleteChat implements IDeleteChat {
  constructor(private readonly _repository: IChatCommandRepository) {}
  public async execute (id: ChatId): Promise<void> {
    await this._repository.delete(id)
  }
}
