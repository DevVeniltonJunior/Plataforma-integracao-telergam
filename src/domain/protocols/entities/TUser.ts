import { TPassword, TChat } from '@/domain/protocols'

export namespace TUser {
  export type Entity = {
    id: number
    name: string
    email: string
    chats?: TChat.Entity[]
  }

  export type Model = {
    id: number
    name: string
    email: string
    chats?: TChat.Model[]
  }

  export type DTO = {
    id: number
    name?: string
    email?: string
  }
}