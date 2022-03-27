import { MessageEmbed } from 'discord.js'

export interface EmbedInterface {
  embed: MessageEmbed
  getEmbed: () => MessageEmbed
}
