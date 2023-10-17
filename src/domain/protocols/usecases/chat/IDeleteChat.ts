import { ChatId } from '@/domain/valueObjects'

export interface IDeleteChat {
  execute: (id: ChatId) => Promise<void>
}
