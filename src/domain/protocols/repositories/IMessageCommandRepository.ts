import { Message } from '@/domain/entities'
import { MessageId } from '@/domain/valueObjects'

export interface IMessageCommandRepository {
  create: (data: Message) => Promise<Message>
  delete: (id: MessageId) => Promise<void>
}