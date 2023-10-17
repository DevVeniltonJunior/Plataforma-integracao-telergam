import { Message } from '@/domain/entities'
import { ICreateMessage, IMessageCommandRepository } from '@/domain/protocols'

export class CreateMessage implements ICreateMessage {
  constructor(private readonly _repository: IMessageCommandRepository) {}
  public async execute (entity: Message): Promise<Message> {
    return await this._repository.create(entity)
  }
}
