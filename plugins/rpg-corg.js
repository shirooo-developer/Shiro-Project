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

  let location = Math.floor(100000000 + Math.random() * 900000000); // Menghasilkan angka acak 9 digit

  users[sender].organization = {
    name: orgName,
    level: 0,
    totalFollowers: 0,
    followersDestroyed: 0,
    organizationsDestroyed: 0,
    followers: [],
    location: location.toString() // Mengubah angka lokasi menjadi string
  };

  conn.reply(m.chat, `Organisasi "${orgName}" dengan kode lokasi ********* (cek lokasi organisasimu dichat pribadi .ceklokasi) telah berhasil dibuat!, organisasimu bisa diserang jika organisasi lain mengetahui lokasi organisasimu`, m);
};

handler.help = ['createorg <nama>'];
handler.tags = ['rpg'];
handler.command = /^createorg$/i;
handler.group = true;

export default handler;
