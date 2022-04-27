import { Command } from '../../structures'
import { Constants } from 'discord.js'
import { UserRepository } from '../../repositories/UserRepository'

export default new Command({
  name: 'ping2',
  description: 'replies with pong2',
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
    console.log(w)
    await interaction.followUp(`${w?.RobloxId}`)
  }
})
