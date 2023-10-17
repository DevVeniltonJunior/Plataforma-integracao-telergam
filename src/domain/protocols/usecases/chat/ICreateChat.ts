import { Chat } from '@/domain/entities'

export interface ICreateChat {
  execute: (entity: Chat) => Promise<Chat>
}
