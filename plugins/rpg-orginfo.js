let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;

  let totalFollowers = orgData.followers.length;
  let totalLevel = orgData.followers.reduce((total, follower) => total + follower.level, 0);
  let threatLevel = Math.min((orgData.followersDestroyed / 1000) * 100, 100);

  let message = `[ INFO ORGANISASI ]\n\n`;
  message += `Nama Organisasi: ${orgData.name}\n`;
  message += `Level Organisasi: ${totalLevel}\n`;
  message += `Jumlah Pengikut: ${totalFollowers}\n`;
  message += `Jumlah Organisasi Dilenyapkan: ${orgData.organizationsDestroyed}\n`;
  message += `Jumlah Pengikut Dilenyapkan: ${orgData.followersDestroyed}\n`;
  message += `Ancaman: ${threatLevel.toFixed(2)}%\n`;

  if (orgData.alliances && orgData.alliances.length > 0) {
    message += `\nOrganisasi Aliansi:\n`;
    for (let alliance of orgData.alliances) {
      message += `- ${alliance}\n`;
    }
  }

  message += `\nDaftar Pengikut:\n`;
  for (let follower of orgData.followers) {
    message += `Nama: ${follower.name}\n`;
    message += `Level: ${follower.level}\n`;
    message += `Umur: ${follower.age} tahun\n`;
    message += `Ras: ${follower.race}\n`;
    message += `Role: ${follower.role}\n\n`;
  }

  conn.reply(m.chat, message, m);
};

handler.help = ['orginfo'];
handler.tags = ['rpg'];
handler.command = /^orginfo$/i;
handler.group = true;

export default handler;