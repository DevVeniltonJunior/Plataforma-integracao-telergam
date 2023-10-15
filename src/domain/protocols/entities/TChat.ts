import { TMessage } from '@/domain/protocols'

export namespace TChat {
  export type Entity = {
    id: number
    user_id: number
    name: string
    messages: TMessage.Entity[]
  }

  export type Model = {
    id: number
    user_id: number
    name: string
    messages: TMessage.Model[]
  }
}