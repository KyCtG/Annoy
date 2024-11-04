const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Display a list of available commands',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
      .setColor('#FFFF00')
      .setTitle('Bot Commands')
      .setDescription('**  📌  Các lệnh hiện có: **\n‎ ')
      .addFields(
      { name: '.setup', value: '↪ setup một #channel để bot thông báo' },
      { name: '.announce', value: '↪ tạo một thông báo trên #channel bạn đã setup' },
        { name: '.ping', value: '↪ kiểm tra độ trễ của bot tùy thuộc vào khu vực' },
        { name: '.embed', value: '↪ một ví dụ về thông báo ' },
    )

    message.reply({ embeds: [embed] });
  },
};
