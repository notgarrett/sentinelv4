import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable
} from 'discord.js'
import { ExtendedClient } from '../client/Client'

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember
}

interface RunOptions {
  client: ExtendedClient
  interaction: ExtendedInteraction
  args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOptions) => never

export type CommandType = {
  userPermissions?: PermissionResolvable[]
  run: RunFunction
} & ChatInputApplicationCommandData
