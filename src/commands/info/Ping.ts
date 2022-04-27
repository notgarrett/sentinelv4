import { Command } from '../../structures'
import { Constants } from 'discord.js'
import { UserRepository } from '../../repositories/UserRepository'

export default new Command({
  name: 'ping',
  description: 'replies with pong',
  options: [
    {
      name: 'string1',
      description: 'test',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.STRING
    }
  ],
  run: async ({ interaction }): Promise<void> => {
    await interaction.followUp('Pong')
    await interaction.deleteReply()

    const x = new UserRepository()
    const w = await x.getUser({ DiscordId: interaction.options.getString('string1') })
    await interaction.followUp(w?.RobloxId as string ?? 'Nope')
  }
})
