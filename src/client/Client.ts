import {
  ApplicationCommandDataResolvable,
  Client,
  ClientEvents,
  Collection
} from 'discord.js'
import { CommandType, RegisterCommandsOptions } from '../typings'
import glob from 'glob'
import { promisify } from 'util'
import { Event } from '../structures'
import path from 'path'

const globPromise = promisify(glob)

export class ExtendedClient extends Client {
  commands: Collection<string, CommandType> = new Collection()

  constructor () {
    super({ intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS'] })
  }

  start (): void {
    void this.registerModules().then(r => console.log('Modules Loaded'))
    void this.login(process.env.BOTTOKEN).then(r => console.log('Bot online'))
  }

  async importFile (filePath: string): Promise<string> {
    return (await import(filePath))?.default
  }

  async registerCommands ({ commands, guildId }: RegisterCommandsOptions): Promise<void> {
    if (guildId !== null) {
      await this.guilds.cache.get(guildId as string)?.commands.set(commands)
      console.log(`Registering commands to ${guildId as string}`)
    } else {
      await this.application?.commands.set(commands)
      console.log('Registering global commands')
    }
  }

  async registerModules (): Promise<void> {
    // Commands
    const slashCommands: ApplicationCommandDataResolvable[] = []
    const commandFiles = await globPromise(path.join(
      __dirname, '/../commands/*/*{.ts,.js}')
    )
    for (const filePath of commandFiles) {
      const command: CommandType = await this.importFile(filePath) as unknown as CommandType
      if (command.name == null) continue
      console.log(command)

      this.commands.set(command.name, command)
      slashCommands.push(command)
    }

    this.on('ready', () => {
      void this.registerCommands({
        commands: slashCommands,
        guildId: process.env.GUILDID ?? null // What does this mean?
      })
    })

    // Event
    const eventFiles = await globPromise(path.join(__dirname, '/../events/*{.ts,.js}')
    )
    for (const filePath of eventFiles) {
      const event: Event<keyof ClientEvents> = await this.importFile(
        filePath
      ) as unknown as Event<keyof ClientEvents>
      this.on(event.event, event.run)
    }
  }
}
