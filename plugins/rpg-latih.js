let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;

  if (!users[sender].organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let orgData = users[sender].organization;
  let followers = orgData.followers;

  let trainingCount = parseInt(m.args[0]) || 1; // Jumlah pengikut yang dilatih (default: 1)
  let trainingLevel = parseInt(m.args[1]) || 1; // Tingkat pelatihan (default: 1)
  let timeShifterLevel = users[sender].timeShifter || 0; // Level artefak Time Shifter
  let timeShifterReduction = timeShifterLevel * 5; // Pengurangan biaya pelatihan dari artefak Time Shifter

  if (trainingCount <= 0) {
    throw 'Jumlah pengikut yang dilatih harus lebih dari 0';
  }

  if (trainingLevel < 1 || trainingLevel > 10) {
    throw 'Tingkat pelatihan harus antara 1 sampai 10';
  }

  let trainingCost = 1000 * trainingCount * trainingLevel - timeShifterReduction; // Biaya pelatihan
  let trainingTime = 10 * trainingCount * trainingLevel; // Waktu pelatihan dalam menit

  if (users[sender].money < trainingCost) {
    throw 'Uang kamu tidak cukup untuk melatih pengikut';
  }

  if (users[sender].lastTraining && (new Date() - users[sender].lastTraining) < trainingTime * 60000) {
    let remainingTime = Math.ceil((trainingTime * 60000 - (new Date() - users[sender].lastTraining)) / 1000);
    throw `Kamu harus menunggu ${remainingTime} detik untuk melatih lagi`;
  }

  let trainedFollowers = [];
  for (let i = 0; i < trainingCount; i++) {
    let follower = followers[i % followers.length]; // Melatih pengikut secara bergantian
    let levelBefore = follower.level; // Level sebelum pelatihan
    let levelIncrease = Math.floor(Math.random() * (trainingLevel + 1)); // Jumlah peningkatan level secara acak (0 - trainingLevel)
    follower.level += levelIncrease;
    trainedFollowers.push({ name: follower.name, levelBefore, levelAfter: follower.level }); // Menyimpan data pengikut yang dilatih
  }

  users[sender].money -= trainingCost;
  users[sender].lastTraining = new Date();

  let message = 'Pelatihan selesai. Pengikut berhasil ditingkatkan levelnya.\n\n';
  for (let trainedFollower of trainedFollowers) {
    message += `Nama: ${trainedFollower.name}\n`;
    message += `Level Sebelumnya: ${trainedFollower.levelBefore}\n`;
    message += `Level Sesudah: ${trainedFollower.levelAfter}\n\n`;
  }

  conn.reply(m.chat, message, m);
};

handler.help = ['latih <jumlah> <tingkat>'];
handler.tags = ['rpg'];
handler.command = /^latih$/i;
handler.group = true;

export default handler;
