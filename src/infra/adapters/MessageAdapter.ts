import { Message } from '@/domain/entities'
import { TMessage } from '@/domain/protocols'
import { ChatId, DateEpoch, MessageId, MessageText, UserId } from '@/domain/valueObjects'

export class MessageAdapter {
  public static toEntity (model: TMessage.Model): Message {
    return new Message(
      new MessageId(model.id),
      new UserId(model.user_id),
      new ChatId(model.chat_id),
      new MessageText(model.message),
      new DateEpoch(model.date)
    )
  }

  public static toModel (entity: Message): TMessage.Model {
    return entity.toJson()
  }
}
