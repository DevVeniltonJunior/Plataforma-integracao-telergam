import { Chat } from '@/domain/entities'
import { ChatId, UserId } from '@/domain/valueObjects'

export interface IChatQueryRepository {
  findOne: (id: ChatId) => Promise<Chat>
  findMany: (id: UserId) => Promise<Chat[]>
}