import { Command } from '../../structures'

export default new Command({
  name: 'awardsolidus2',
  description: 'replies with pong',
  options: [],
  run: async ({ interaction }): Promise<void> => {
    await interaction.followUp('Pong3')
  }
})
