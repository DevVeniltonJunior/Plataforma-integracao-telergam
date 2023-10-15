export namespace TMessage {
  export type Entity = {
    id: number
    user_id: number
    message: string
    chat_id: number
    date: Date | string
  }

  export type Model = {
    id: number
    user_id: number
    message: string
    chat_id: number
    date: Date | string
  }
}