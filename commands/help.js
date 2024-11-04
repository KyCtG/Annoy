const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Display a list of available commands',
  execute(message, args, commandList) {
    const embed = new EmbedBuilder()
      .setColor('#f7dc6f')
      .setTitle('Bot Commands')
      .setDescription('▶️  **Các lệnh có sẵn:**\n‎ ')
      .addFields(
      { name: 'setup', value: 'setup một channel để bot thông báo' },
      { name: 'announce', value: 'tạo một thông báo trên channel bạn đã setup' },
        { name: 'ping', value: 'kiểm tra độ trễ của bot tùy thuộc vào khu vực' },
        { name: 'embed', value: 'một ví dụ thông báo trông như thế nào' },
    )

    message.reply({ embeds: [embed] });
  },
};
