import { injectable } from 'inversify'
import { BanInterface } from '../typings'
import { Ban } from '../models/BanModel'

@injectable()
export class BanService {
  private readonly database = Ban

  public async createBan (data: object): Promise<BanInterface | null> {
    return await this.database.create(data).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async getBan (query: object): Promise<BanInterface | null> {
    return await this.database.findOne(query).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async getBans (query: object): Promise<BanInterface[] | null> {
    return await this.database.find(query).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async updateBan (query: object, update: object, options: object = {}): Promise<BanInterface | null> {
    return await this.database.findOneAndUpdate(query, update, options).catch((err: Error) => {
      console.log(err)
      return null
    })
  }

  public async deleteBan (query: object): Promise<void> {
    this.database.deleteOne(query).catch((err: Error) => {
      console.log(err)
    })
  }
}
