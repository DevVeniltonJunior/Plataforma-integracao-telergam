import { UserId, UserName, Email } from '@/domain/valueObjects'
import { Chat } from '@/domain/entities'
import { TUser } from '@/domain/protocols'

export class User {
  constructor(
    private readonly _id: UserId,
    private readonly _name: UserName,
    private readonly _email: Email,
    private readonly _chats?: Chat[]
  ) {}

  public getId(): UserId {
    return this._id
  }

  public getName(): UserName {
    return this._name
  }

  public getEmail(): Email {
    return this._email
  }

  public getChats(): Chat[] | undefined {
    return this._chats
  }

  public toJson(): TUser.Entity {
    return {
      id: this._id.toNumber(),
      name: this._name.toString(),
      email: this._email.toString(),
      chats: this._chats ? this._chats.map(chat => chat.toJson()) : undefined
    }
  }
}