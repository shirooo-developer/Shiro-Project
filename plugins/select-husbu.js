/***
 CREATOR RIZXYU(SXZY)
 github.com/Rizxyu
 Dont delete credit nigga
***/
let handler = async (m, { conn, usedPrefix, text, command}) => {

var user = global.db.data.users[m.sender]

global.husbu = ["luffy", "naruto", "ichigo", "goku", "elric", "saitama", "levi", "light", "eren", "kirito",
"shoyo", "vegeta", "killua", "zoro", "natsu", "yato", "subaru", "asta", "kyouma", "kazima",
"denji", "daisuke", "anos", "rimuru", "maou", "oreki", "akuto", "kelvin", "mob", "diablo",
"sakamoto", "ainz", "cid",
"Sebastian", "Tamaki", "Sasuke", "Kakashi", "Hinata", "Haku", "Zero", "Jotaro",
"Yuri", "Victor", "Yato", "Usui", "Hajime", "Levi", "Todoroki", "Aomine", "Soma", "Rin",
"Yuzuru", "Kaname", "Natsuki", "Kei", "Souma", "Kuroo", "Mamoru", "Sugawara", "Hikaru", "Keigo",
"Kyo", "Makoto", "Kageyama", "Shinichi", "Ryoma", "Kaname", "Takumi", "Sousuke", "Taichi", "Riku",
"Ritsu", "Ren", "Shun", "Tomoe", "Yamato", "Kakeru", "Mikaela", "Tobio", "Takashi", "Yugo",
"Haru", "Hinata", "Hajime", "Tooru", "Tamaki", "Kazuki", "Hiro", "Yuzuru", "Shoyo", "Makoto",
"Zen", "Tomoya", "Takato", "Asahi", "Kaito", "Yuta", "Haruka", "Sora", "Shin", "Takao",
"Nagisa", "Haruka", "Akira", "Kotaro", "Suguru", "Hayato", "Shinji", "Kanata", "Yuri", "Kenshin",
"Yamato", "Reiji", "Kazuki", "Ran", "Rui", "Akira", "Shun", "Naoki", "Hayato", "Takumi",
"Hikaru", "Yusuke", "Yuta", "Kaito", "Riku", "Ren", "Takashi", "Takeru", "Kazu", "Makoto",
"Hiroki", "Yuma", "Sho", "Tsubasa", "Tomo", "Kento", "Shin", "Shogo", "Taiga", "Kanade",
"Haruma", "Ryosuke", "Ryota", "Yamato", "Yuki", "Hiroto", "Mio", "Hayato", "Jun", "Kota",
"Tatsuya", "Kakeru", "Takaya", "Yuma", "Shun", "Sota", "Yuto", "Yusaku", "Shinichi", "Shinjiro",
"Yuzo", "Rin", "Kazuma", "Haruto", "Tetsuya", "Ryo", "Shinobu", "Takao", "Takuma", "Takeru",
"Yoshito", "Haruya", "Yutaro", "Tetsuo", "Shingo", "Junpei", "Sosuke", "Takahiro", "Shu", "Satoshi",
"Yugo", "Daiki", "Yosuke", "Soma", "Shintaro", "Shogo", "Hayate", "Yoshihiro", "Hiroshi", "Hayato",
"Takayuki", "Koichi", "Kazuki", "Kazuya", "Masato", "Naoya", "Ryohei", "Ryoma", "Takashi", "Taiki",
"Takato", "Yuya", "Yuto", "Yuji", "Yuma", "Yosuke", "Yoshinobu", "Wataru", "Yuki", "Yuta",
"Haruhiko", "Hideki", "Shinpei", "Shunichi", "Takafumi", "Takuma", "Toru", "Yasuhiro", "Yoshiki", "Yoshitaka",
"Yudai", "Yujiro", "Yuma", "Yuto", "Yuya", "Yukito", "Yukio", "Yugo", "Yusaku", "Yusuke",
"Yukihiro", "Yusei", "Yuto", "Yuusuke", "Daiki", "Daisuke", "Haruto", "Hayato", "Hideyuki", "Hikaru",
"Hiroaki", "Hiroki", "Hiromu", "Hiroya", "Hiroyuki", "Hiroto", "Kaito", "Kazuhiko", "Kazuki", "Kazuma",
"Kazuo", "Keigo", "Keiji", "Keisuke", "Kenji", "Kensuke", "Kenta", "Kento", "Kohei", "Koji",
"Kosuke", "Kotaro", "Kouta", "Kyohei", "Kyosuke", "Makoto", "Masahiro", "Masaki", "Masao", "Masaru",
"Masashi", "Masato", "Masaaki", "Mitsuru", "Noboru", "Nobu", "Nobuo", "Nobuyuki", "Norio", "Ryohei",
"Ryota", "Ryoya", "Ryutaro", "Satoshi", "Seiji", "Shigeki", "Shigeru", "Shinji", "Shinsuke", "Sho",
"Shogo", "Shohei", "Shoji", "Shoma", "Shota", "Shuichi", "Shun", "Shunsuke", "Sota", "Susumu",
"Tadao", "Tadashi", "Takafumi", "Takahide", "Takahiro", "Takahisa", "Takamasa", "Takao", "Takashi", "Takayoshi",
"Takehiko", "Takeshi", "Takumi", "Takuya", "Tatsuya", "Tetsuya", "Tomoaki", "Tomohiko", "Tomohiro", "Tomokazu",
"Tomoki", "Tomoya", "Toru", "Toshiaki", "Toshihiro", "Toshio", "Tsubasa", "Tsuyoshi", "Yasuhiko", "Yasunori",
"Yasushi", "Yoji", "Yohei", "Yoshiaki", "Yoshifumi", "Yoshihiro", "Yoshikazu", "Yoshinori", "Yoshiro", "Yoshito",
"Yoshiyuki", "Yosuke", "Yota", "Yosuke", "Yozo", "Yugo", "Yui", "Yuichi", "Yuji", "Yukihiro",
"Yukinobu", "Yukio", "Yusaku", "Yusuke", "Yutaka", "Yuto", "Yuya"
]

var bintang = {
"satu": "⭐",
"dua": "⭐⭐",
"tiga": "⭐⭐⭐",
"empat": "⭐⭐⭐⭐",
"lima": "⭐⭐⭐⭐⭐",
"enam": "⭐⭐⭐⭐⭐⭐"
}//star how good is the husbu
   
   let husb = text.trim().toLowerCase() // to filter text
     
   if (!husbu.includes(husb)) throw `*Pilih Husbu Apa Yg Kamu Inginkan:\n\n${husbu.map(husb => `› ${husb}`).join('\n')}

     Cara Menggunakan:
     *${usedPrefix + command} <namehusbu>*
     
     Contoh:
     *${usedPrefix + command} luffy*
     `

    if (user.husbu == "") {
    user.husbu = husb
    m.reply(`*Anda Telah Memilih Husbu ${husb}*`)
    } else if (user.husbu) {
    m.reply(`*Anda Sudah Punya Husbu ${user.husbu} Tidak Bisa Diganti*`)
   }

}

handler.help = ['selecthusbu <type>']
handler.tags = ['rpg']
handler.command = /^(slecthusbu|selecthusbu)$/i
handler.limit = 1
handler.register = false
export default handler
