import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Fitur Mengecek Jadwal Sholat*\n\n*_Contoh: ${usedPrefix}${command} Bandung_*`
    const res = await jadwalsholat(text)
    m.reply(`
Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i
handler.register = false
handler.limit = 1
export default handler