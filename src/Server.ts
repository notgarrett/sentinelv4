import 'reflect-metadata'

import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

export const bootsrap = (): void => {
  const container = new Container()
  const server = new InversifyExpressServer(container)
  const app = server.build()

  app.listen(5000, () => { console.log('Server connected') })
}
