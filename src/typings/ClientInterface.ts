import { ApplicationCommandDataResolvable } from 'discord.js'

export interface RegisterCommandsOptions {
  guildId?: string | null
  commands: ApplicationCommandDataResolvable[]
}
