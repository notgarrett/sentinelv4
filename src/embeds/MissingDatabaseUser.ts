import { MessageEmbed } from 'discord.js'
import { author, footer } from './EmbedTemplate.json'

export const MissingDatabaseUser = new MessageEmbed()
  .setAuthor(author)
  .setColor(6708479)
  .setTitle('Missing Database User.')
  .setDescription('User does not exist in the database-tests.')
  .setTimestamp()
  .setFooter(footer)
