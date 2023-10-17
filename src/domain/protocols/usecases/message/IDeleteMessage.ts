import { MessageId } from '@/domain/valueObjects'

export interface IDeleteMessage {
  execute: (id: MessageId) => Promise<void>
}
