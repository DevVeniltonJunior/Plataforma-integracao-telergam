import { Chat } from '@/domain/entities'
import { ChatId } from '@/domain/valueObjects'

export interface IChatCommandRepository {
  create: (data: Chat) => Promise<Chat>
  delete: (id: ChatId) => Promise<void>
}