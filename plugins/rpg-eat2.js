let handler = async m => m.reply(`*List of Food Recipes*


*Ayam Bakar 🍗*
*.eat2 ayamb*
+ 40 Stamina ⚡

*Ayam Goreng 🍗*
*.eat2 ayamg*
+ 50 Stamina ⚡

*Steak 🥩*
*.eat2 steak*
+ 70 Stamina ⚡

*Ikan Bakar 🐟*
*.eat2 ikan*
+ 44 Stamina ⚡

*Udang Bakar  🍤*
*.eat2 udang*
+ 60 Stamina ⚡

*Babi Panggang 🥓*
*.eat2 babi*
+ 58 Stamina ⚡

*Jus Mangga 🍸*
*.eat2 jusmangga*
+ 60 Stamina ⚡

*Pisang Goreng 🍌*
*.eat2 pisanggoreng*
+ 60 Stamina ⚡

*Mie Ayam 🍝*
*.eat2 mieayam*
+ 110 Stamina ⚡


*Makanan Bisa Dijual Di #jualan mieayam*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['eat']
handler.tags = ['rpg']
handler.command = /^eat$/i
handler.premium = false
export default handler