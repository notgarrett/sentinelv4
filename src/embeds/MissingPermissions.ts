import { MessageEmbed } from 'discord.js'
import { author, footer } from './EmbedTemplate.json'

export const MissingPermissions = new MessageEmbed()
  .setAuthor(author)
  .setColor(6708479)
  .setTitle('Missing Permissions.')
  .setDescription('You do not have permission to use this command.')
  .setTimestamp()
  .setFooter(footer)
