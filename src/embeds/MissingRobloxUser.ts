import { MessageEmbed } from 'discord.js'
import { author, footer } from './EmbedTemplate.json'

export const MissingRobloxUser = new MessageEmbed()
  .setAuthor(author)
  .setColor(6708479)
  .setTitle('Missing Roblox User.')
  .setDescription('User does not exist on ROBLOX.')
  .setTimestamp()
  .setFooter(footer)
