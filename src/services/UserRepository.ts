import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { UserInterface } from '../typings'
import { User } from '../models'
import { TYPES } from '../typings/Types'

@injectable()
export class UserRepository {
  @inject(TYPES.UserDatabase) private readonly database = User

  public async createUser (data: object): Promise<UserInterface | null> {
    return await this.database.create(data).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async getUser (query: object): Promise<UserInterface | null> {
    return await this.database.findOne(query).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async getUsers (query: object): Promise<UserInterface[] | null> {
    return await this.database.find(query).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async updateUser (query: object, update: object, options: object = {}): Promise<UserInterface | null> {
    return await this.database.findOneAndUpdate(query, update, options).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async deleteUser (query: object): Promise<void> {
    this.database.deleteOne(query).catch((err: Error) => {
      console.log(err)
    })
  }
}
