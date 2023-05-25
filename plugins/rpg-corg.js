let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;
  
  if (users[sender].organization) {
    throw 'Kamu sudah memiliki sebuah organisasi';
  }
  
  let orgName = m.text.split(' ')[1];
  
  if (!orgName) {
    throw 'Silakan masukkan nama organisasi yang ingin kamu buat';
  }
  
  users[sender].organization = {
    name: orgName,
    level: 0,
    totalFollowers: 0,
    followersDestroyed: 0,
    organizationsDestroyed: 0,
    followers: []
  };
  
  conn.reply(m.chat, `Organisasi "${orgName}" telah berhasil dibuat!`, m);
};

handler.help = ['createorg <nama>'];
handler.tags = ['rpg'];
handler.command = /^createorg$/i;
handler.group = true;

export default handler;