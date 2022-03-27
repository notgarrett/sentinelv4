import { ExtendedClient } from './client/Client'
import { connect } from 'mongoose'
import 'dotenv/config'

export const client = new ExtendedClient()

client.start()

if (process.env.MONGOURI != null) {
  void connect(process.env.MONGOURI)
}
