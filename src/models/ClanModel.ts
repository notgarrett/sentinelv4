import { Schema } from 'mongoose'
import { ClanInterface } from '../typings'

export const ClanModel = new Schema<ClanInterface>({
  ClanId: {
    type: String,
    required: true
  },
  Banned: {
    type: 'Boolean'
  }
})
