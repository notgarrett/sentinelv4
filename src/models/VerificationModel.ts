import { model, Schema } from 'mongoose'
import { VerificationInterface } from '../typings'

const VerificationModel = new Schema<VerificationInterface>({
  DiscordId: {
    type: String,
    required: true
  },
  VerificationKey: {
    type: String,
    required: true
  },
  createdAt: { type: Date, expires: 30, default: Date.now }
})

export const Verification = model<VerificationInterface>(
  'Verifications',
  VerificationModel
)
