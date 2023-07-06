let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;

  // Mendapatkan argumen dari pesan
  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
    throw 'Silakan mention target organisasi yang ingin diserang';
  }

  let targetData = users[mentionedJid];
  if (!targetData || !targetData.organization) {
    throw 'Organisasi target tidak ditemukan';
  }

  let targetOrg = targetData.organization;

  // Menghitung total level pengikut organisasi
  let orgTotalLevel = orgData.followers.reduce(
    (total, follower) => total + follower.level,
    0
  );
  let targetTotalLevel = targetOrg.followers.reduce(
    (total, follower) => total + follower.level,
    0
  );

  // Menghitung peluang kemenangan berdasarkan total level organisasi
  let winChance = orgTotalLevel / (orgTotalLevel + targetTotalLevel);

  // Menentukan jumlah pengikut yang akan dikirim untuk menyerang
  let attackCount = orgData.followers.length;

  let message = `[ PERTARUNGAN ORGANISASI ]\n\n`;
  message += `Organisasi Kamu:\n`;
  message += `Total Level: ${orgTotalLevel}\n`;
  message += `Organisasi Target:\n`;
  message += `Total Level: ${targetTotalLevel}\n`;
  message += `Peluang Kemenangan: ${(winChance * 100).toFixed(2)}%\n\n`;

  // Menentukan apakah pengguna berhasil menyerang
  let isAttackSuccessful = Math.random() < winChance;

  if (isAttackSuccessful) {
    message += `Selamat! Kamu berhasil menyerang Organisasi Target dan memperoleh kemenangan!\n`;

    // Mengurangi pengikut di kedua organisasi
    let destroyedFollowers = Math.min(attackCount, targetOrg.followers.length);
    orgData.followers.splice(0, destroyedFollowers);
    targetOrg.followers.splice(0, destroyedFollowers);

    // Mengurangi kesehatan dan stamina pengguna
    users[sender].health -= 20;
    users[sender].stamina -= 20;

    // Mengecek apakah organisasi target hancur
    if (targetOrg.followers.length === 0) {
      message += `Organisasi Target telah hancur! Kamu berhasil menghancurkan musuhmu!\n`;

      // Mengambil bank target dengan besaran acak antara 0.1% sampai 2.0%
      let targetBank = users[sender].bank || 0;
      let stolenAmount = Math.random() * (targetBank * 0.02 - targetBank * 0.001) + targetBank * 0.001;
      stolenAmount = parseFloat(stolenAmount.toFixed(2));

      message += `Kamu berhasil mengambil ${stolenAmount} Money dari bank Organisasi Target!\n`;

      // Menambahkan ke bank pengguna
      users[sender].bank += stolenAmount;

      // Mencatat organisasi yang hancur
      users[sender].organizationsDestroyed++;
      // Mencatat jumlah pengikut target yang dibunuh
      users[sender].followersDestroyed += destroyedFollowers;

      // Menghapus data organisasi target
      delete targetData.organization;
    }
  } else {
    message += `Sayang sekali, seranganmu gagal dan Organisasi Target berhasil mempertahankan diri!\n`;

    // Mengurangi kesehatan dan stamina pengguna
    users[sender].health -= 10;
    users[sender].stamina -= 10;

    // Mengurangi pengikut di kedua organisasi
    let destroyedFollowers = Math.min(attackCount, orgData.followers.length);
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

  // Menampilkan jumlah pengikut yang mati
  let userFollowersDied = Math.min(attackCount, orgData.followers.length);
  let targetFollowersDied = Math.min(attackCount, targetOrg.followers.length);

  message += `\nJumlah Pengikut Mati:\n`;
  message += `Pengikut Kamu: ${userFollowersDied}\n`;
  message += `Pengikut Target: ${targetFollowersDied}\n`;

  conn.reply(m.chat, message, m);
};

handler.help = ['attack <mention_target>'];
handler.tags = ['rpg'];
handler.command = /^attack$/i;
handler.group = true;

export default handler;
