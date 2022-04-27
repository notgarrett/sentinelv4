import 'reflect-metadata'
import { UserRepositorySingleton } from '../../repositories/UserRepository'

describe('User Tests', () => {
  it('Checking for User', async (done) => {
    const n = UserRepositorySingleton
    const x = await n.getUsers({})
    console.log(x)
  })
})
