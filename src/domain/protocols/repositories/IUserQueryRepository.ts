import { User } from '@/domain/entities'
import { Email, UserId } from '@/domain/valueObjects'

export interface IUserQueryRepository {
  findById: (id: UserId) => Promise<User>
  findByEmail: (email: Email) => Promise<User>
  findMany: (ids: UserId[]) => Promise<User[]>
  findAll: () => Promise<User[]>
}