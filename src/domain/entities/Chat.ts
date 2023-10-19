import { UserId, ChatId, ChatName } from '@/domain/valueObjects'
import { Message } from '@/domain/entities'
import { TChat } from '@/domain/protocols'

export class Chat {
  constructor(
    private readonly _id: ChatId,
    private readonly _userId: UserId,
    private readonly _name: ChatName,
    private readonly _messages?: Message[]
  ) {}

  public getId(): ChatId {
    return this._id
  }

  public getUseId(): UserId {
    return this._userId
  }

  public getName(): ChatName {
    return this._name
  }

  public getMessages(): Message[] | undefined {
    return this._messages
  }

  public toJson(): TChat.Entity {
    return {
      id: this._id.toNumber(),
      user_id: this._userId.toNumber(),
      name: this._name.toString(),
      messages: this._messages ? this._messages.map(msg => msg.toJson()) : undefined
    }
  }
}
