const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor('#FFFF00')
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://cdn.discordapp.com/attachments/1302945490991710250/1302960242904141824/This_is_Thumnail_500_x_500_px.png?ex=672a03c9&is=6728b249&hm=2e78a6aef5aeedba1bd0d6cdde9119279ecb266739d3be59af3b918ff5c877f5&')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
      
    )
    .setImage('https://cdn.discordapp.com/attachments/1302945490991710250/1302982913557528576/This_is_image_1.gif?ex=672a18e6&is=6728c766&hm=ac1506baf2b7f7de83fa90d9dfc42830c1383219805fd33fa8af4e03f0590685&')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
