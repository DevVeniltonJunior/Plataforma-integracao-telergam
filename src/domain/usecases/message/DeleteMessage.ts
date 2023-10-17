import { IDeleteMessage, IMessageCommandRepository } from '@/domain/protocols'
import { MessageId } from '@/domain/valueObjects'

export class DeleteMessage implements IDeleteMessage {
  constructor(private readonly _repository: IMessageCommandRepository) {}
  public async execute (id: MessageId): Promise<void> {
    await this._repository.delete(id)
  }
}
