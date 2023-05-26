let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users;
  let sender = m.sender;
  let senderData = users[sender];

  if (!senderData.organization) {
    throw 'Kamu belum memiliki organisasi';
  }

  let target = m.mentionedJid[0];
  let targetData = users[target];

  if (!targetData || !targetData.organization) {
    throw 'Organisasi target tidak ditemukan';
  }

  let orgName = senderData.organization.name;
  let targetOrgName = targetData.organization.name;

  // Memeriksa apakah organisasi target telah menerima aliansi
  if (targetData.organization.allianceRequest && targetData.organization.allianceRequest === sender) {
    senderData.organization.alliances.push(target);
    targetData.organization.alliances.push(sender);
    delete targetData.organization.allianceRequest;

    conn.reply(m.chat, `Organisasi ${orgName} dan ${targetOrgName} telah membentuk aliansi!`, m);
  } else {
    // Mengajak organisasi target untuk aliansi
    targetData.organization.allianceRequest = sender;

    conn.reply(m.chat, `Organisasi ${orgName} telah mengajak ${targetOrgName} untuk aliansi. Tunggu persetujuan dari organisasi tersebut.`, m);
  }
};

handler.help = ['inviteorg @target'];
handler.tags = ['rpg'];
handler.command = /^inviteorg$/i;
handler.group = true;

export default handler;
