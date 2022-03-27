import { Container } from 'inversify'
import 'reflect-metadata'
import { TYPES } from './typings/Types'
import { BanInterface, UserInterface } from './typings'
import { User } from './models'
import { Ban } from './models/BanModel'

const myContainer = new Container()
myContainer.bind<UserInterface>(TYPES.UserDatabase).to(User)
myContainer.bind<BanInterface>(TYPES.BanDatabase).to(Ban)
