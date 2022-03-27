import { Schema } from 'mongoose'
import { RoleConfigInterface } from '../typings'

export const RoleConfigModel = new Schema<RoleConfigInterface>({
  RoleId: {
    type: String,
    required: true
  },
  Security: {
    type: Number,
    default: 0
  }
})
