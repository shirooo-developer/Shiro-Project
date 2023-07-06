let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;

  // Memeriksa apakah pengguna memiliki cukup money untuk mengganti nama organisasi
  if (users[sender].money < 30000) {
    throw 'Maaf, kamu tidak memiliki cukup money untuk mengganti nama organisasi';
  }

  // Mendapatkan argumen dari pesan
  let newName = m.text.split(' ')[1];
  if (!newName) {
    throw 'Silakan masukkan nama baru untuk organisasi';
  }

  // Mengurangi money dari pengguna
  users[sender].money -= 30000;

  // Mengganti nama organisasi
  users[sender].name = newName;

  conn.reply(m.chat, `Nama organisasi berhasil diubah menjadi ${newName}`, m);
};

handler.help = ['changeorgname <nama_baru>'];
handler.tags = ['rpg'];
handler.command = /^changeorgname$/i;
handler.group = true;

export default handler;
