let handler = async (m, { conn, usedPrefix, command }) => {
  let users = global.db.data.users
  let target = m.mentionedJid[0]
  if (!target) throw `Tag seseorang yang ingin kamu bunuh dengan mengetik *${usedPrefix}${command} @tag*`
  if (target === m.sender) throw 'Tidak bisa membunuh diri sendiri'
  if (typeof users[target] === 'undefined') throw 'Target tidak terdaftar di dalam database'
  let levelUser = users[m.sender].level
  let levelTarget = users[target].level
  let exp = Math.floor(Math.random() * 100000)
  let userChance = levelUser / (levelUser + levelTarget)
  let killed = Math.random() < userChance
  
  if (killed) {
    let runeDecrease = Math.floor(Math.random() * 3) + 1
    let targetRunes = users[target].runes
    let userRunes = users[m.sender].runes
    
    if (targetRunes > 100) throw 'Rune target melebihi 100. Tidak bisa melakukan assassins.'
    if (userRunes < runeDecrease) runeDecrease = userRunes
    
    users[target].exp -= exp
    users[target].runes += runeDecrease
    users[m.sender].exp += exp
    users[m.sender].runes -= runeDecrease
    
    conn.reply(m.chat, `Kamu berhasil membunuh ${conn.getName(target)} dan mendapatkan ${exp} EXP. Rune kamu berkurang sebanyak ${runeDecrease} dan rune target bertambah sebanyak ${runeDecrease}. EXP target berkurang ${exp}`, m)
  } else {
    users[m.sender].exp -= exp
    users[m.sender].healt = 0
    conn.reply(m.chat, `Kamu gagal membunuh ${conn.getName(target)} dan tewas. EXP kamu berkurang ${exp}`, m)
  }
}

handler.help = ['assassins *@tag*']
handler.tags = ['rpg']
handler.command = /^assassins/i
handler.group = true
handler.limit = 1

export default handler
