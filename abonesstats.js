const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Lütfen abone kanalını etiketleyebilirmisin?')
   
  db.set(`abonek_${message.guild.id}`, kanal.id)

 
  message.channel.send(`Abone kanalı başarıyla ayarlandı; **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'abonekanal-ayarla',
 description: 'kayıt kanalı Olunacak kanalı seçersiniz',
 usage: 'kayıt-kanal <#kanal>'
};