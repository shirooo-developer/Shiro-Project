let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;

  // Mendapatkan argumen dari pesan
  let target = m.mentionedJid[0];
  let targetData = users[target];

  if (!targetData || !targetData.organization) {
    throw 'Organisasi target tidak ditemukan';
  }

  let targetOrg = targetData.organization;

  // Menghitung total level pengikut organisasi
  let orgTotalLevel = orgData.followers.reduce((total, follower) => total + follower.level, 0);
  let targetTotalLevel = targetOrg.followers.reduce((total, follower) => total + follower.level, 0);

  // Menghitung peluang kemenangan berdasarkan total level organisasi
  let winChance = orgTotalLevel / (orgTotalLevel + targetTotalLevel);

  // Menghitung peluang pengintai tertangkap berdasarkan jumlah pengikut organisasi
  let captureChance = 0.2 + (0.01 * orgData.followers.length);

  // Menghitung peluang pengintai tertangkap
  let isCaught = Math.random() < captureChance;

  let message = `[ PENGINTAIAN ORGANISASI ]\n\n`;
  message += `Organisasi Kamu:\n`;
  message += `Total Level: ${orgTotalLevel}\n`;
  message += `Organisasi Target:\n`;
  message += `Total Level: ${targetTotalLevel}\n`;
  message += `Peluang Kemenangan: ${(winChance * 100).toFixed(2)}%\n`;
  message += `Peluang Pengintai Tertangkap: ${(captureChance * 100).toFixed(2)}%\n\n`;

  if (isCaught) {
    message += `Pengintai Kamu tertangkap oleh Organisasi Target!\n`;
    // Lakukan tindakan yang sesuai saat pengintai tertangkap
    // Misalnya, kurangi pengikut atau sanksi lainnya
  } else {
    message += `Pengintai Kamu berhasil mendapatkan informasi tanpa terdeteksi!\n`;
    // Lakukan tindakan yang sesuai saat pengintai berhasil
    // Misalnya, tambahkan informasi atau keuntungan lainnya
  }

  conn.reply(m.chat, message, m);
};

handler.help = ['scout @target'];
handler.tags = ['rpg'];
handler.command = /^scout$/i;
handler.group = true;

export default handler;