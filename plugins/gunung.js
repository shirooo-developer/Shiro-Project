import fetch from 'node-fetch'
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Mountain.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButtonImg(m.chat, a, "Random Image", "gunung", 'Next', ".gunung", m)
}
handler.help = ['gunung']
handler.tags = ['internet']
handler.command = /^gunung$/i

export default handler