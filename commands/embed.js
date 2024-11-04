const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'embed',
  description: 'embed example',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('This is Title')
    .setDescription('Some description here')
    .setThumbnail('https://cdn.discordapp.com/attachments/1302945490991710250/1302945590446915615/Kychitoge_1.png?ex=6729f624&is=6728a4a4&hm=523664898c1278983f09b1662a866415e2599e02f494caf6e258227934d539c0&')
    .addFields(
      { name: 'Field Name ', value: 'Some value here' },
      
    )
    .setImage('https://cdn.discordapp.com/attachments/1302945490991710250/1302945590446915615/Kychitoge_1.png?ex=6729f624&is=6728a4a4&hm=523664898c1278983f09b1662a866415e2599e02f494caf6e258227934d539c0&')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here' });

    message.reply({ embeds: [embed] });
  },
};
