const timeout = 10800000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebun + 10800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Pastikan Kamu Memiliki Semua Bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${usedPrefix}buy bibitmangga 500\n\n*List*\n- Bibitmangga\n- Bibitanggur\n- Bibitpisang\n- Bibitjeruk\n- Bibitapel`)
                                     if (new Date - global.db.data.users[m.sender].lastberkebun< 10800000) throw `Anda Sudah Menanam\nMohon Tunggu Hasil Panenmu\nTunggu Selama ${msToTime(time - new Date())} Lagi`
                                     if (global.db.data.users[m.sender].bibitmangga > 499) {
                                 	if (global.db.data.users[m.sender].bibitapel > 499) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 499) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 499) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 499) {
                                     let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1                                 
                                     global.db.data.users[m.sender].bibitpisang -= 500
                                     global.db.data.users[m.sender].bibitanggur -= 500
                                     global.db.data.users[m.sender].bibitmangga -= 500
                                     global.db.data.users[m.sender].bibitjeruk -= 500
                                     global.db.data.users[m.sender].bibitapel -= 500
                                     global.db.data.users[m.sender].lastberkebun = new Date * 1
                                     let hsl = `Selamat ${conn.getName(m.sender)}, Kamu Mendapatkan : \n+${pisangpoin} Pisang 🍌\n+${manggapoin} Mangga 🍋\n+${anggurpoin} Anggur 🍇\n+${jerukpoin} Jeruk 🍊\n+${apelpoin} Apel 🍎`
                                     conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `*Saatnya Berkebun Lagi.*`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan Bibit Anggur Kamu *500* Untuk Bisa Berkebun`)
                              } else m.reply(`Pastikan Bibit Jeruk Kamu *500* Untuk Bisa Berkebun`)
                          } else m.reply(`Pastikan Bibit Pisang Kamu *500* Untuk Bisa Berkebun`)
                      } else m.reply(`Pastikan Bibit Apel Kamu *500* Untuk Bisa Berkebun`)
                  } else m.reply(`Pastikan Bibit Mangga Kamu *500* Untuk Bisa Berkebun`)
              }
handler.help = ['berkebun']
handler.tags = ['rpg']
handler.command = /^(berkebun)/i
handler.group = true
handler.limit = 1
handler.register = true

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}