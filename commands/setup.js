const { EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'setup',
  description: 'Set the announcement channel',
  execute(message, args) {
    if (!message.guild) {
      return message.reply('This command can only be used in a server (guild).');
    }

    if (!message.member.permissions.has('MANAGE_GUILD')) {
      return message.reply('You do not have permission to set the announcement channel.');
    }

    const channel = message.mentions.channels.first();

    if (!channel) {
      const embed = new EmbedBuilder()
        .setColor('#FFFF00') 
        .setAuthor({
          name: 'Mention Channel',
          iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1297599083694919741/se.gif?ex=6729a091&is=67284f11&hm=56c3a15bb2cfec4e265afdf56c47da901f658bc5760deafe26dc6cc652895c29&',
          url: ''
        })
        .setDescription(`Please mention a channel for announcements.\n\n**Usage : ** \`<prefix>setup #channel\``)
        .setTimestamp();

      message.reply({ embeds: [embed] });
    } else {
 
      const dataPath = path.join(__dirname, '../data/announcementChannels.json');
      let serverData = {};

      try {
        serverData = require(dataPath);
      } catch (err) {
        console.error('Error reading server data:', err);
      }

 
      serverData[message.guild.id] = channel.id;

     
      fs.writeFileSync(dataPath, JSON.stringify(serverData, null, 2), 'utf-8');

      console.log(`Announcement channel set to: ${channel.name}`);

      const embed = new EmbedBuilder()
        .setColor('#FFFF00') 
        .setAuthor({
          name: 'Channel Sucessfully set',
          iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1236802032938127470/4104-verify-yellow.gif?ex=6729eee7&is=67289d67&hm=037ec62a2570d15abbe43770c07c3c3bd4160ee0db30b6cf5c7782789adadeb2&',
          url: ''
        })
        .setDescription(`Announcement channel has been set to ${channel}`)
        .setTimestamp();

      message.reply({ embeds: [embed] });
    }
  },
};
