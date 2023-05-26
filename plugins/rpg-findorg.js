let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;
  let senderData = users[sender];

  if (!senderData.organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  // Menghitung peluang berdasarkan jumlah pengikut
  let followerCount = senderData.organization.followers.length;
  let maxChance = Math.min(0.4 * followerCount, 0.4); // Maksimal peluang 40%
  let chance = 0.01 * 40; // Peluang awal 1% per pengikut

  // Mencari pengguna dengan peluang terpilih
  let targetUser;
  let targetOrg;

  for (let user of Object.values(users)) {
    if (user.jid !== sender && user.organization) {
      let org = user.organization;
      let targetChance = Math.random();
      
      // Jika peluang terpilih, simpan pengguna dan organisasinya
      if (targetChance < chance) {
        targetUser = user;
        targetOrg = org;
        break;
      }
    }
  }

  if (!targetUser || !targetOrg) {
    throw 'Tidak dapat menemukan organisasi lain';
  }

  let message = `[ PENCARIAN LOKASI ORGANISASI ]\n\n`;
  message += `Organisasi Kamu:\n`;
  message += `Nama: ${senderData.organization.name}\n`;
  message += `Organisasi yang Ditemukan:\n`;
  message += `Nama: ${targetOrg.name}\n`;
  message += `Lokasi: ${targetOrg.location}\n`;

  conn.reply(m.chat, message, m);
};

handler.help = ['findorg'];
handler.tags = ['rpg'];
handler.command = /^findorg$/i;

export default handler;
