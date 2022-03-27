import { model, Schema } from 'mongoose'
import { BanInterface } from '../typings'

export const BanModel = new Schema<BanInterface>({
  RobloxId: {
    type: String,
    required: true
  },
  Empyria: {
    type: Boolean
  },
  Elysium: {
    type: Boolean
  },
  Universe: {
    type: Boolean
  }
})

export const Ban = model<BanInterface>(
  'Bans',
  BanModel
)
