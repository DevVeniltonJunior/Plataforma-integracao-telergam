import { UserId, MessageId, ChatId, MessageText, DateEpoch } from '@/domain/valueObjects'
import { TMessage } from '@/domain/protocols'

export class Message {
  constructor(
    private readonly _id: MessageId,
    private readonly _userId: UserId,
    private readonly _chatId: ChatId,
    private readonly _message: MessageText,
    private readonly _date: DateEpoch

  ) {}

  public getId(): MessageId {
    return this._id
  }

  public getUseId(): UserId {
    return this._userId
  }

  public getChatId(): ChatId {
    return this._chatId
  }

  public getMessage(): MessageText {
    return this._message
  }

  public date(): DateEpoch {
    return this._date
  }

  public toJson(): TMessage.Entity {
    return {
      id: this._id.toNumber(),
      user_id: this._userId.toNumber(),
      message: this._message.toString(),
      chat_id: this._chatId.toNumber(),
      date: this._date.toISO()
    }
  }
}
