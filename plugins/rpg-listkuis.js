let handler = async m => m.reply(`
*Premium Prize Quiz ⭐*

*Jawab Pertanyaan Untuk Mendapatkan Premium Gratis.*

*Fisika 🛰️*
.kuis1
  • Premium 10 Hari
*Matematika ➗*
.kuis2
  • Premium 10 Hari
*Kimia ⚗️*
.kuis3
  • Premium 10 Hari
*Biologi 🔬*
.kuis4
  • Premium 10 Hari
*Astronomi 🔭*
.kuis5
  • Premium 10 Hari
*Bahasa Pemrograman 🈁*
.kuis6
  • Premium 10 Hari

`.trim()) // Tambah sendiri kalo mau


handler.help = ['kuis']
handler.tags = ['rpg']
handler.command = /^kuis$/i
handler.register = false
handler.premium = false
export default handler