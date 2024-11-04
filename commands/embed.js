const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor(#f7dc6f')
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://cdn.discordapp.com/attachments/1302945490991710250/1302960242904141824/This_is_Thumnail_500_x_500_px.png?ex=672a03c9&is=6728b249&hm=2e78a6aef5aeedba1bd0d6cdde9119279ecb266739d3be59af3b918ff5c877f5&')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
      
    )
    .setImage('https://cdn.discordapp.com/attachments/1302945490991710250/1302962530980724756/This_is_image.gif?ex=672a05eb&is=6728b46b&hm=71cdc29810da90f13eb92d7a63377e9f42dae2f28b3f49e79fad80e9f5aeb783&')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
