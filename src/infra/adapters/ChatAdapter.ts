import { Chat } from '@/domain/entities'
import { TChat } from '@/domain/protocols'
import { ChatId, ChatName, UserId } from '@/domain/valueObjects'
import { MessageAdapter } from './MessageAdapter'

export class ChatAdapter {
  public static toEntity (model: TChat.Model): Chat {
    return new Chat(
      new ChatId(model.id),
      new UserId(model.user_id),
      new ChatName(model.name),
      model.messages ? model.messages.map(msg => MessageAdapter.toEntity(msg)) : undefined
    )
  }

  public static toModel (entity: Chat): TChat.Model {
    return entity.toJson()
  }
}