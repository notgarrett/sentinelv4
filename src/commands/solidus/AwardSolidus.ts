import { Command } from '../../structures'
import { Constants } from 'discord.js'

export default new Command({
  name: 'awardsolidus',
  description: 'replies with pong',
  options: [
    {
      name: 'event',
      description: 'The type of event.',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.NUMBER
    }
  ],
  run: async ({ interaction }): Promise<void> => {
    console.log(interaction)
    await interaction.followUp('Pong3')
    console.log(interaction.options.getNumber('num1'))
  }
})
