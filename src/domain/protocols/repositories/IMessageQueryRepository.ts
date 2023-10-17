import { Message } from '@/domain/entities'
import { MessageId, UserId } from '@/domain/valueObjects'

export interface IMessageQueryRepository {
  findOne: (id: MessageId) => Promise<Message>
  findMany: (id: UserId) => Promise<Message[]>
}