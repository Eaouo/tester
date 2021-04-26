const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail('')
 .setColor('RANDOM')
 .setDescription(`
 > \`i!sunucu-kur -> Sunucu Kurar.\`

 > \`i!sunucu-kur2 -> Sunucu Kurar2.\`
 
 > \`i!publicsunucu-kur-> Public Sunucu Kurar.\`
 
 > \`i!gif-tema -> Gif Temalı Sunucu Atar.\`
 
 > \`i!j4j-tema-> J4J Temalı Sunucu Atar.\`

 > \`i!oyun-tema-> Oyun Temalı Sunucu Atar.\`

 > \`iyardım-> Yardım Menüsünü Atar.\

 > \`i!yapımcım-> Yapımcımı Gösterir.\
 

**[Botu Ekle]()**\``)
 .setFooter(`Fousy Code Share Sunar .`)
    .setTimestamp()
    .setImage("")
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   //abo
  description: '',
  usage: ''
};