import { model, Schema } from 'mongoose'
import { UserInterface } from '../typings'

const UserModel = new Schema<UserInterface>({
  DiscordId: {
    type: String,
    required: true
  },
  RobloxUserName: {
    type: String
  },
  RobloxId: {
    type: String,
    required: true
  },
  Roles: {
    type: Array
  },
  Solidus: {
    type: Number
  }
})

export const User = model<UserInterface>(
  'Users',
  UserModel
)
