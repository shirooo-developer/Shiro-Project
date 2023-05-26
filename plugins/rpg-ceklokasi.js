let handler = async (m, { conn, usedPrefix, command, args }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;

  if (!orgData.location) {
    throw 'Lokasi organisasi Kamu tidak tersedia';
  }

  conn.reply(m.chat, `Lokasi organisasi Kamu: ${orgData.location}`, m);
};

handler.help = ['ceklokasi'];
handler.tags = ['rpg'];
handler.command = /^ceklokasi$/i;
handler.private = true;

export default handler;
