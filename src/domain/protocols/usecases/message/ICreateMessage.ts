import { Message } from '@/domain/entities'

export interface ICreateMessage {
  execute: (entity: Message) => Promise<Message>
}
