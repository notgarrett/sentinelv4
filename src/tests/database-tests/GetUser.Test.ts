import 'reflect-metadata'
import { UserRepository } from '../../services/UserRepository'

describe('User Tests', () => {
  it('Checking for User', async (done) => {
    const n = new UserRepository()
    const x = await n.getUsers({})
    console.log(x)
  })
})
