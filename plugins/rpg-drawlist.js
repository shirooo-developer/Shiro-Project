let handler = async m => m.reply(`*DRAW*

*/draw1* (3 Crystal)
- Item Maksimal 100 Juta

*/draw2* (1 Crystal)
- Item Maksimal 10 Juta
`.trim()) // Tambah sendiri kalo mau


handler.help = ['draw']
handler.tags = ['rpg']
handler.command = /^draw$/i
handler.premium = false
export default handler