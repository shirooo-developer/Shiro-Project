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

  // Menghitung peluang target melarikan diri
  let escapeChance = 0.1;

  // Menentukan jumlah pengikut yang akan dikirim untuk menyerang secara acak
  let attackCount = Math.floor(Math.random() * orgData.followers.length) + 1;

  let message = `[ PERTARUNGAN ORGANISASI ]\n\n`;
  message += `Organisasi Kamu:\n`;
  message += `Total Level: ${orgTotalLevel}\n`;
  message += `Organisasi Target:\n`;
  message += `Total Level: ${targetTotalLevel}\n`;
  message += `Peluang Kemenangan: ${(winChance * 100).toFixed(2)}%\n\n`;

  // Menentukan apakah target berhasil melarikan diri
  let isEscaped = Math.random() < escapeChance;

  if (isEscaped) {
    message += `Organisasi Target berhasil melarikan diri sebelum kamu sampai!\n`;
  } else {
    // Menentukan apakah pengguna berhasil menyerang
    let isAttackSuccessful = Math.random() < winChance;

    if (isAttackSuccessful) {
      message += `Selamat! Kamu berhasil menyerang Organisasi Target dan memperoleh kemenangan!\n`;

      // Mengambil sumber daya dari target
      let stolenMoney = targetData.money;
      let stolenExp = targetData.exp;

      // Mengurangi sumber daya dari target
      targetData.money = 0;
      targetData.exp = 0;

      // Mengurangi pengikut di kedua organisasi
      let destroyedFollowers = Math.floor(Math.random() * targetOrg.followers.length) + 1;
      orgData.followers.splice(0, destroyedFollowers);
      targetOrg.followers.splice(0, destroyedFollowers);

      // Mengurangi kesehatan dan stamina pengguna
      users[sender].health -= 20;
      users[sender].stamina -= 20;

      // Mengecek apakah organisasi target hancur
      if (targetOrg.followers.length === 0) {
        message += `Organisasi Target telah hancur! Kamu berhasil menghancurkan musuhmu!\n`;

        // Mencatat organisasi yang hancur
        users[sender].organizationsDestroyed++;
        // Mencatat jumlah pengikut target yang dibunuh
        users[sender].followersDestroyed += destroyedFollowers;

        // Menghapus data organisasi target
        delete targetData.organization;
      }

      // Menambahkan sumber daya yang diambil ke organisasi pengguna
      orgData.money += stolenMoney;
      orgData.exp += stolenExp;

      // Menampilkan hasil rampasan
      message += `\nHasil Rampasan:\n`;
      message += `Money yang diambil: ${stolenMoney}\n`;
      message += `Exp yang diambil: ${stolenExp}\n`;
    } else {
      message += `Sayang sekali, seranganmu gagal dan Organisasi Target berhasil mempertahankan diri!\n`;

      // Mengurangi kesehatan dan stamina pengguna
      users[sender].health -= 10;
      users[sender].stamina -= 10;

      // Mengurangi pengikut di kedua organisasi
      let destroyedFollowers = Math.floor(Math.random() * orgData.followers.length) + 1;
      orgData.followers.splice(0, destroyedFollowers);
      targetOrg.followers.splice(0, destroyedFollowers);

      // Mengecek apakah pengikut pengguna hancur
      if (orgData.followers.length === 0) {
        message += `Kamu kalah dalam pertarungan ini dan pengikutmu hancur!\n`;

        // Mencatat organisasi yang hancur
        users[sender].organizationsDestroyed++;
        // Mencatat jumlah pengikut pengguna yang hancur
        users[sender].followersDestroyed += destroyedFollowers;
      }
    }
  }

  conn.reply(m.chat, message, m);
};

handler.help = ['attack @target'];
handler.tags = ['rpg'];
handler.command = /^attack$/i;
handler.group = true;

export default handler;
