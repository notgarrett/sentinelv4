import { ExtendedInteraction } from '../typings'
import { ApplicationCommandOptionTypes } from 'discord.js/typings/enums'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Command {
  constructor (commandOptions: { name: string, options: Array<{ name: string, description: string, type: ApplicationCommandOptionTypes, required: boolean }>, description: string, run: ({ interaction }: { interaction: ExtendedInteraction }) => Promise<void> }) {
    Object.assign(this, commandOptions)
  }
}
