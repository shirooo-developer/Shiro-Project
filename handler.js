import { smsg } from './lib/simple.js'



import { format } from 'util'



import { fileURLToPath } from 'url'



import path, { join } from 'path'



import { unwatchFile, watchFile } from 'fs'



import chalk from 'chalk'



import fs from 'fs'



import fetch from 'node-fetch'



import moment from 'moment-timezone'







/**



 * @type {import('@adiwajshing/baileys')}



 */



const { proto } = (await import('@adiwajshing/baileys')).default



const isNumber = x => typeof x === 'number' && !isNaN(x)



const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {



    clearTimeout(this)



    resolve()



}, ms))







/**



 * Handle messages upsert



 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 



 */



 



export async function handler(chatUpdate) {



    this.msgqueque = this.msgqueque || []



    if (!chatUpdate)



        return



    this.pushMessage(chatUpdate.messages).catch(console.error)



    let m = chatUpdate.messages[chatUpdate.messages.length - 1]



    



    global.img = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' 



    



    if (!m)



        return



    if (global.db.data == null)



        await global.loadDatabase()



    try {



        m = smsg(this, m) || m



        if (!m)



            return



        m.exp = 0



        m.limit = false



        try {



            // TODO: use loop to insert data instead of this



            let user = global.db.data.users[m.sender]



            if (typeof user !== 'object')



                global.db.data.users[m.sender] = {}



            if (user) {



                if (!isNumber(user.exp))



                    user.exp = 0



                if (!isNumber(user.limit))



                    user.limit = 50



                if (!isNumber(user.lastclaim))



                    user.lastclaim = 0

                    

                 if (!isNumber(user.lastmancingeasy))



                    user.lastmancingeasy = 0



                if (!isNumber(user.pasangan))



                    user.pasangan = ''



                if (!('registered' in user))



                    user.registered = false





                if (!user.registered) {



                    if (!('name' in user))



                        user.name = m.name

                     



                    if (!isNumber(user.age))



                        user.age = -1



                    if (!isNumber(user.regTime))



                        user.regTime = -1



                }



                if (!isNumber(user.afk))



                    user.afk = -1



                if (!('afkReason' in user))



                    user.afkReason = ''



                if (!('banned' in user))



                    user.banned = false



                if (!isNumber(user.warn))



                    user.warn = 0



                if (!isNumber(user.level))



                    user.level = 0



                if (!('role' in user))
                    user.role = 'Begginer'
				
					    if (!('rank' in user))
                    user.rank = 'Begginer'
				
                if (!isNumber(user.levelhunter))

                    user.levelhunter = 0

					    if (!('previousRank' in user))
                    user.previousRank = 'Begginer'


                if (!('autolevelup' in user))



                    user.autolevelup = true



                if (!isNumber(user.skinkastil))

                    user.skinkastil = 0
				
			     if (!isNumber(user.timeShifter))
                    user.timeShifter = 0
				if (!isNumber(user.lastTraining))
                    user.lastTraining = 0
					
				
				if (!('name' in user.organization))
                    user.organization.name = ''
				if (!isNumber(user.organization.level))
                    user.organization.level = 0
				if (!('followers' in user.organization))
                    user.organization.followers = []
				if (!isNumber(user.organization.organizationsDestroyed))
                    user.organization.organizationsDestroyed = 0			
				if (!isNumber(user.organization.followersDestroyed))
                    user.organization.followersDestroyed = 0
				if (!('alliances' in user.organization))
                    user.organization.alliances = ''
				
				
                if (!isNumber(user.stamina))

                    user.stamina = 500

                if (!isNumber(user.csm))

                    user.csm = 0

                if (!isNumber(user.oc))

                    user.oc = 0

                if (!isNumber(user.zc))

                    user.zc = 0

                if (!isNumber(user.nc))

                    user.nc = 0

                if (!isNumber(user.vc))

                    user.vc = 0

                if (!isNumber(user.pc))

                    user.pc = 0

                if (!isNumber(user.ac))

                    user.ac = 0

                if (!isNumber(user.pengeluaran))

                    user.pengeluaran = 0

                if (!isNumber(user.chealth))

                    user.chealth = 0

                if (!isNumber(user.might))

                    user.might = 0

               if (!('cnama' in user))

                    user.cnama = ''
					
					
               if (!('partner' in user))

                    user.partner = ''
					
		        if (!isNumber(user.invest))

                    user.invest = 0

                if (!isNumber(user.investExpiration))

                    user.investExpiration = 0

                if (!isNumber(user.investProfit))

                    user.investProfit = 0

               if (!isNumber(user.padi))

                    user.padi = 0

                if (!isNumber(user.kayu))

                    user.kayu = 0

                if (!isNumber(user.batu))

                    user.batu = 0

                if (!isNumber(user.bijih))

                    user.bijih = 0

                if (!isNumber(user.emas))

                    user.emas = 0

                if (!isNumber(user.gems))

                    user.gems = 0

                if (!isNumber(user.boosta))

                    user.boosta = 0

                if (!isNumber(user.boostb))

                    user.boostb = 0

                if (!isNumber(user.boosts))

                    user.boosts = 0

                if (!isNumber(user.lastlk))

                    user.lastlk = 0

                if (!isNumber(user.lastbansos))

                    user.lastbansos = 0

                if (!isNumber(user.boostk))

                    user.boostk = 0

                if (!isNumber(user.banteng))

                    user.banteng = 0

                if (!isNumber(user.harimau))

                    user.harimau = 0

                if (!isNumber(user.gajah))

                    user.gajah = 0

                if (!isNumber(user.panda))

                    user.panda = 0

                if (!isNumber(user.kambing))

                    user.kambing = 0

                if (!isNumber(user.kerbau))

                    user.kerbau = 0

                if (!isNumber(user.buaya))

                    user.buaya = 0

                if (!isNumber(user.sapi))

                    user.sapi = 0

                if (!isNumber(user.monyet))

                    user.monyet = 0

                 if (!isNumber(user.babihutan))

                    user.babihutan = 0

                if (!isNumber(user.babi))

                    user.babi = 0

                if (!isNumber(user.ayam))

                    user.ayam = 0

                if (!isNumber(user.lastberburu))

                    user.lastberburu = 0

                if (!isNumber(user.apel))

                    user.apel = 0

                if (!isNumber(user.bibitapel))

                    user.bibitapel = 0

                if (!isNumber(user.mangga))

                    user.mangga = 0

                if (!isNumber(user.bibitmangga))

                    user.bibitmangga = 0

                if (!isNumber(user.jeruk))

                    user.jeruk = 0

                if (!isNumber(user.bibitjeruk))

                    user.bibitjeruk = 0

                if (!isNumber(user.pisang))

                    user.pisang = 0

                 if (!isNumber(user.bibitpisang))

                    user.bibitpisang = 0

                if (!isNumber(user.anggur))

                    user.anggur = 0

                if (!isNumber(user.bibitanggur))

                    user.bibitanggur = 0

                if (!isNumber(user.lastberkebun))

                    user.lastberkebun = 0                    

                 if (!isNumber(user.coal))

                    user.coal = 0

                if (!isNumber(user.ayambakar))

                    user.ayambakar = 0

                if (!isNumber(user.ayam))

                    user.ayam = 0

                if (!isNumber(user.gulaiayam))

                    user.gulaiayam = 0

                if (!isNumber(user.rendang))

                    user.rendang = 0

                if (!isNumber(user.ayamgoreng))

                    user.ayamgoreng = 0

                if (!isNumber(user.oporayam))

                    user.oporayam = 0

                if (!isNumber(user.steak))

                    user.steak = 0

                if (!isNumber(user.babipanggang))

                    user.babipanggang = 0

                if (!isNumber(user.ikanbakar))

                    user.ikanbakar = 0

                if (!isNumber(user.lelebakar))

                    user.lelebakar = 0

                 if (!isNumber(user.nilabakar))

                    user.nilabakar = 0

                if (!isNumber(user.bawalbakar))

                    user.bawalbakar = 0

                if (!isNumber(user.pausbakar))

                    user.pausbakar = 0

                if (!isNumber(user.kepitingbakar))

                    user.kepitingbakar = 0                            

                if (!isNumber(user.lastduel))

                    user.lastduel = 0 

                if (!isNumber(user.fightnaga))

                    user.fightnaga = 0                            

                if (!isNumber(user.centaur))

                    user.centaur = 0           

                 if (!isNumber(user.lastjb))

                    user.lastjb = 0

                if (!isNumber(user.lastkerja))

                    user.lastkerja = 0

                 if (!isNumber(user.ojek))

                    user.ojek = 0

                if (!isNumber(user.pedagang))

                    user.pedagang = 0

                if (!isNumber(user.dokter))

                    user.dokter = 0

                if (!isNumber(user.petani))

                    user.petani = 0                            

                if (!isNumber(user.montir))

                    user.montit = 0 

                if (!isNumber(user.kuli))

                    user.kuli = 0            

                if (!isNumber(user.paus))

                    user.paus = 0

                if (!isNumber(user.kepiting))

                    user.kepiting = 0

                 if (!isNumber(user.gurita))

                    user.gurita = 0

                if (!isNumber(user.cumi))

                    user.cumi = 0

                if (!isNumber(user.buntal))

                    user.buntal = 0

                if (!isNumber(user.dory))

                    user.dory = 0                            

                if (!isNumber(user.lumba))

                    user.lumba = 0 

                if (!isNumber(user.lobster))

                    user.lobster = 0  

                if (!isNumber(user.hiu))

                    user.hiu = 0

                if (!isNumber(user.udang))

                    user.udang = 0

                 if (!isNumber(user.ikan))

                    user.ikan = 0

                if (!isNumber(user.orca))

                    user.orca = 0

                if (!isNumber(user.botol))

                    user.botol = 0

                if (!isNumber(user.kaleng))

                    user.kaleng = 0

                 if (!isNumber(user.kardus))

                    user.kardus = 0

                if (!isNumber(user.lastmulung))

                    user.lastmulung = 0

                if (!isNumber(user.ramuan))

                    user.ramuan = 0  

                if (!isNumber(user.lastramuanclaim))

                    user.lastramuanclaim = 0

                if (!isNumber(user.potion))

                    user.potion = 0

                 if (!isNumber(user.lastpotionclaim))

                    user.lastpotionclaim = 0

                if (!isNumber(user.lastswordclaim))

                    user.lastswordclaim = 0

                if (!isNumber(user.weapon))

                    user.weapon = 0

                if (!isNumber(user.lastweaponclaim))

                    user.lastweaponclaim = 0

                 if (!isNumber(user.anakpancingan))

                    user.anakpancingan = 0

                if (!isNumber(user.lastmancingclaim))

                    user.lastmancingclaim = 0

                  if (!isNumber(user.lastmisi))

                    user.lastmisi = 0

                 if (!isNumber(user.mana))

                    user.mana = 500

                 if (!isNumber(user.intelligence))

                    user.intelligence = 99

                 if (!isNumber(user.lastrobint))

                    user.lastrobint = 0

                 if (!isNumber(user.rune))

                    user.rune = 0

                  if (!isNumber(user.drink))

                    user.drink = 0

                      if (!isNumber(user.skillsport))

                    user.skillsport = 0

                 if (!isNumber(user.lastsport))

                    user.lastsport = 0   

                 if (!isNumber(user.ruko))

                    user.ruko = 0   

                 if (!isNumber(user.skilladventure))

                    user.skilladventure = 0   

                   if (!isNumber(user.pisanggoreng))

                    user.pisanggoreng = 0

                 if (!isNumber(user.minyak))

                    user.minyak = 0   

                 if (!isNumber(user.susu))

                    user.susu = 0   

                if (!isNumber(user.jusmangga))

                    user.jusmangga = 0   

                if (!isNumber(user.skillgardening))

                    user.skillgardening = 0   

                 if (!isNumber(user.semikonduktor))

                    user.semikonduktor = 0   

                if (!isNumber(user.plastikpvc))

                    user.plastikpvc = 0   

               if (!isNumber(user.lastperisai))

                    user.lastperisai = 0   

               if (!isNumber(user.skillfishing))

                    user.skillfishing = 0   

               if (!isNumber(user.ax))

                    user.ax = 0   

               if (!isNumber(user.axdurability))

                    user.axdurability = 0   

              if (!isNumber(user.hargadiri))

                    user.hargadiri = 0   

               if (!isNumber(user.lastsex))

                    user.lastsex = 0   

               if (!isNumber(user.air))

                    user.air = 0   

if (!isNumber(user.garam))

                    user.garam = 0     

                  if (!isNumber(user.merica))

                    user.merica = 0   

                    if (!isNumber(user.saostiram))

                    user.saostiram = 0  

if (!isNumber(user.kecap))

                    user.kecap = 0  

if (!isNumber(user.bawangmerah))

                    user.bawangmerah = 0     

                    if (!isNumber(user.bawangputih))

                    user.bawangputih = 0   

                    if (!isNumber(user.telur))

                    user.telur = 0   

                    if (!isNumber(user.mie))

                    user.mie = 0   
                    
                    if (!isNumber(user.tipeyt))

                    user.tipeyt = 0   

                    if (!isNumber(user.kamera))

                    user.kamera = 0   

                    if (!isNumber(user.pencahayaan))

                    user.pencahayaan = 0   
                   
                 if (!isNumber(user.tripod))

                    user.tripod = 0   

                if (!isNumber(user.se))

                    user.se = 0   

                 if (!isNumber(user.internet))

                    user.internet = 0   

                if (!isNumber(user.mb))

                    user.mb = 0   

               if (!isNumber(user.cpu))

                    user.cpu = 0   

               if (!isNumber(user.gpu))

                    user.gpu = 0   

               if (!isNumber(user.ram))

                    user.ram = 0   

               if (!isNumber(user.ssds))

                    user.ssds = 0   

              if (!isNumber(user.minitor))

                    user.monitor = 0   

               if (!isNumber(user.hp))

                    user.hp = 0   
if (!isNumber(user.mak))

                    user.mak = 0   
                    if (!isNumber(user.skillyt))

                    user.skillyt = 0   

      

                  if (!isNumber(user.viewer))

                    user.viewer = 0   

                 if (!isNumber(user.like))

                    user.like = 0   

                if (!isNumber(user.dislike))

                    user.dislike = 0   

               if (!isNumber(user.subscriber))

                    user.subscriber = 0   

               if (!isNumber(user.showtime))

                    user.showtime = 0   

               if (!isNumber(user.monet))

                    user.monet = 0   

               if (!isNumber(user.video))

                    user.video = 0   

              if (!isNumber(user.lastup))

                    user.lastup = 0                    





                if (!isNumber(user.money))



                    user.money = 500000



                if (!isNumber(user.atm))



                    user.atm = 0



                if (!isNumber(user.fullatm))



                    user.fullatm = 0



                if (!isNumber(user.bank))



                    user.bank = 0



                if (!isNumber(user.health))



                    user.health = 500



                if (!isNumber(user.potion))



                    user.potion = 0



                if (!isNumber(user.trash))



                    user.trash = 0



                if (!isNumber(user.wood))



                    user.wood = 0



                if (!isNumber(user.rock))



                    user.rock = 0



                if (!isNumber(user.string))



                    user.string = 0



                if (!isNumber(user.petFood))



                    user.petFood = 0







                if (!isNumber(user.emerald))



                    user.emerald = 0



                if (!isNumber(user.diamond))



                    user.diamond = 0



                if (!isNumber(user.gold))



                    user.gold = 0



                if (!isNumber(user.iron))



                    user.iron = 0



                if (!isNumber(user.upgrader))



                    user.upgrader = 0







                if (!isNumber(user.common))



                    user.common = 0

                    

                    if (!isNumber(user.lastnebang))



                    user.lastnebang = 0



                if (!isNumber(user.uncommon))



                    user.uncommon = 0



                if (!isNumber(user.mythic))



                    user.mythic = 0



                if (!isNumber(user.legendary))



                    user.legendary = 0



                if (!isNumber(user.superior))



                    user.superior = 0



                if (!isNumber(user.pet))



                    user.pet = 0







                if (!isNumber(user.horse))



                    user.horse = 0

                    

                if (!isNumber(user.os))



                    user.os = 0

                    

                if (!isNumber(user.osr))



                    user.osr = 0

                    

                if (!isNumber(user.lastmerkosa))



                    user.lastmerkosa = 0

                    

                if (!isNumber(user.diperkosa))



                    user.diperkosa = 0

                    

                if (!isNumber(user.memperkosa))



                    user.memperkosa = 0



                if (!isNumber(user.horseexp))



                    user.horseexp = 0



                if (!isNumber(user.cat))



                    user.cat = 0



                if (!isNumber(user.catexp))



                    user.catexp = 0



                if (!isNumber(user.fox))



                    user.fox = 0



                if (!isNumber(user.foxhexp))



                    user.foxexp = 0



                if (!isNumber(user.dog))



                    user.dog = 0



                if (!isNumber(user.dogexp))



                    user.dogexp = 0



                if (!isNumber(user.robo))



                    user.robo = 0



                if (!isNumber(user.roboxp))



                    user.roboxp = 0

                    

                if (!isNumber(user.lastngojek))



                    user.lastngojek = 0



                if (!isNumber(user.ojekk))



                    user.ojekk = 0

                    

                       if (!isNumber(user.lastpolisi))



                    user.lastpolisi = 0







                if (!isNumber(user.horselastfeed))



                    user.horselastfeed = 0



                if (!isNumber(user.catlastfeed))



                    user.catlastfeed = 0



                if (!isNumber(user.foxlastfeed))



                    user.foxlastfeed = 0



                if (!isNumber(user.doglastfeed))



                    user.doglastfeed = 0







                if (!isNumber(user.armor))



                    user.armor = 0



                if (!isNumber(user.armordurability))



                    user.armordurability = 0



                if (!isNumber(user.sword))



                    user.sword = 0



                if (!isNumber(user.sworddurability))



                    user.sworddurability = 0

                    

                if (!isNumber(user.mieayam))



                user.mieayam = 0

                    if (!isNumber(user.daunbawang))



                    user.daunbawang = 0



                if (!isNumber(user.pickaxe))



                    user.pickaxe = 0



                if (!isNumber(user.pickaxedurability))



                    user.pickaxedurability = 0



                if (!isNumber(user.fishingrod))



                    user.fishingrod = 0



                if (!isNumber(user.fishingroddurability))



                    user.fishingroddurability = 0

                    

                    if (!isNumber(user.manar))



                    user.manar = 0

                    

                if (!isNumber(user.premium1hari))



                    user.premium1hari = 0

                if (!isNumber(user.advenaglory))
                    user.advenaglory = 0
                if (!isNumber(user.slayerglory))
                    user.slayerglory = 0
                if (!isNumber(user.ravennaglory))
                    user.ravennaglory = 0
                if (!isNumber(user.apocalypseglory))
                    user.apocalypseglory = 0
                if (!isNumber(user.horizonglory))
                    user.horizonglory = 0
                if (!isNumber(user.sakanaglory))
                    user.sakanaglory = 0
                if (!isNumber(user.kazariteglory))
                    user.kazariteglory = 0




                if (!isNumber(user.lastclaim))



                    user.lastclaim = 0



                if (!isNumber(user.lastadventure))



                    user.lastadventure = 0



                if (!isNumber(user.lastfishing))



                    user.lastfishing = 0



                if (!isNumber(user.lastdungeon))



                    user.lastdungeon = 0

                if (!isNumber(user.lastlumber))

                    

                    user.lastlumber = 0



                if (!isNumber(user.lastduel))



                    user.lastduel = 0



                if (!isNumber(user.lastmining))



                    user.lastmining = 0



					
					if (!isNumber(user.lasthunt))



                    user.lasthunt = 0



                if (!isNumber(user.lastweekly))



                    user.lastweekly = 0

                    

                if (!isNumber(user.lastngewe))



                    user.lastngewe = 0



                if (!isNumber(user.lastmonthly))



                    user.lastmonthly = 0

                    

                if (!isNumber(user.mooncard))



                    user.mooncard = 0



                if (!isNumber(user.starcard))



                    user.starcard = 0



                if (!isNumber(user.lastbunga))



                    user.lastbunga = 0
                    
                   if (!isNumber(user.viewer))



                    user.viewer = 0
                    
                    if (!isNumber(user.att))



                    user.att = 0



                if (!isNumber(user.note))



                    user.note = 0
					
					
					if (!isNumber(user.c1))
                    user.c1 = 0   
               if (!isNumber(user.c2))
                    user.c2 = 0
               if (!isNumber(user.c3))
                    user.c3 = 0   
               if (!isNumber(user.c4))
                    user.c4 = 0   
               if (!isNumber(user.c5))
                    user.c5 = 0   
               if (!isNumber(user.c6))
                    user.c6 = 0   
               if (!isNumber(user.c7))
                    user.c7 = 0   
               if (!isNumber(user.c8))
                    user.c8 = 0   
               if (!isNumber(user.c9))
                    user.c9 = 0   
              if (!isNumber(user.c10))
                    user.c10 = 0

                    

                    

                 if (!isNumber(user.lastob))



                    user.lastob = 0



                 if (!isNumber(user.lastbunuhi))



                    user.lastbunuhi = 0

                    

                 if (!isNumber(user.lastrob))



                    user.lastrob = 0

                    

                  if (!isNumber(user.lastbegal))



                    user.lastbegal = 0



                    

                if (!isNumber(user.aksespremium1hari))



                    user.aksespremium1hari = 0



                if (!isNumber(user.premium))



                    user.premium = false



                if (!isNumber(user.premiumTime))



                    user.premiumTime = 0



                if (!isNumber(user.limitjoin))



                    user.limitjoin = 0

                    

                    if (!('title' in user))

              user.title = ''

              if (!('nickname' in user))

              user.nickname = ''

              if (!('skill' in user))

              user.skill = ''

              if (!('ras' in user))

              user.ras = ''

              if (!('waifu' in user))

              user.waifu = ''

              if (!('husbu' in user))

              user.husbu = ''
              
              if (!('chname' in user))

              user.chname = ''

              if (!("misi" in user)) user.misi = ""



            } else



                global.db.data.users[m.sender] = {



                    exp: 0,



                    limit: 50,

                    stamina: 500,



                    lastclaim: 0,



                    registered: false,



                    name: m.name,



                    pasangan: '',

                    

                    title: '',

                    nickname: '',
                    chname: '',



                    age: -1,



                    regTime: -1,



                    afk: -1,



                    afkReason: '',



                    banned: false,



                    warn: 0,



                    level: 0,



                    role: 'Begginer',
					rank: 'Begginer',
					levelhunter: 0,



                    autolevelup: true,



                    money: 500000,



                    bank: 0,



                    atm: 0,



                    fullatm: 0,



                    health: 500,



                    potion: 0,



                    trash: 0,



                    wood: 0,



                    rock: 0,



                    string: 0,

                                       

                    skinkastil: 0,

                    csm: 0,

                    oc: 0,

                    zc: 0,

                    nc: 0,

                    vc: 0,

                    pc: 0,

                    ac: 0,

                    chealth: 1000,

                    might: 0,

                    cnama: '',

                    padi: 0,

                    kayu: 0,

                    batu: 0,

                    bijih: 0,

                    emas: 0,

                    gems: 0,

                    boosta: 0,

                    boostb: 0,

                    boosts: 0,

                    lastlk: 0,

                    lastbansos: 0,

                    boostk: 0,

                    panda: 0,

                    kambing: 0,

                    harimau: 0,

                    gajah: 0,

                    banteng: 0,

                    babihutan: 0,

                    monyet: 0,

                    kerbau: 0,

                    sapi: 0,

                    buaya: 0,

                    babi: 0,

                    ayam: 0,

                    lastberburu: 0,

                    anggur: 0,

                    bibitanggur: 0,

                    apel: 0,

                    bibitapel: 0,

                    mangga: 0,

                    bibitmangga: 0,

                    bibitpisang: 0,

                    bibitjeruk: 0,

                    lastngewe: 0,

                    jeruk: 0,

                    pisang: 0,

                    lastberkebun: 0,                  

                    coal: 0,

                    ayambakar: 0,

                    gulaiayam: 0,

                    rendang: 0,

                    ayamgoreng: 0,

                    oporayam: 0,

                    steak: 0,

                    babipanggang: 0,

                    ikanbakar: 0,

                    lelebakar: 0,

                    nilabakar: 0,

                    bawalbakar: 0,

                    udangbakar: 0,

                    pausbakar: 0,

                    kepitingbakar: 0,      

                    lastpolisi: 0,      

                    lastduel: 0,

                    centaur: 0,      

                    fightnaga: 0,

                    lastjb: 0,

                    lastkerja: 0,

                    dokter: 0,

                    petani: 0,

                    montir: 0,

                    kuli: 0,      

                    ojek: 0,

                    lastngojek: 0,      

                    ojekk: 0,

                    pedagang: 0,      

                    paus: 0,      

                    kepiting: 0,

                    gurita: 0,      

                    lobster: 0,

                    lumba: 0,

                    dory: 0,

                    buntal: 0,

                    cumi: 0,

                    orca: 0,

                    ikan: 0,      

                    udang: 0,

                    pengeluaran: 0,

                    hiu: 0,      

                    manar: 0,      

                    botol: 0,

                    kaleng: 0,      

                    kardus: 0,

                    lastmulung: 0,      

                    ramuan: 0,      

                    lastramuanclaim: 0,

                    potion: 0, 
    
                    att: 0,  

                    lastpotionclaim: 0,

                    lastswordclaim: 0,      

                    weapon: 0,

                    lastweaponclaim: 0,      

                    anakpancingan: 0,

                    lastmancingclaim: 0,     

                    lastmisi: 0,      

                    misi: "",

                    mana: 500,      

                    crystal: 0,

                    skill: "",

                    husbu: "",

                    waifu: "",

                    ras: "",

                    mooncard: 0,

                    starcard: 0,      

                    intelligence: 99,      

                    lastrobint: 0,      

                    rune: 0,      

                    drink: 0,      

                    skillsport :0,

                    lastsport :0,

                    skilladventure: 0,

                    pisanggoreng :0,

                    minyak :0,

                    susu: 0,

                    jusmangga: 0,

                    skillgardening: 0,

                    semikonduktor: 0,

                    plastikpvc: 0,

                    skillfishing: 0,

                    lastperisai: 0,

                    ax: 0,

                    axdurability: 0,

                    hargadiri: 0,

                    lastsex: 0,
					
					c1: 0,
                    c2 :0,
                    c3 :0,
                    c4: 0,
                    c5: 0,
                    c6: 0,
                    c7: 0,
                    c8: 0,
                    c9: 0,
                    c10: 0,


                    hp: 0,

                    monitor :0,

                    mb :0,

                    internet: 0,

                    tipeyt: 0,

                    skillyt: 0,

                    mak: 0,

                    ssds: 0,

                    ram: 0,

                    gpu: 0,

                    cpu: 0,

                    se: 0,

                    kamera: 0,

                    pencahayaan: 0,
                    viewer :0,

                    like: 0,

                    dislike: 0,

                    subscriber: 0,

                    showtime: 0,

                    monet: 0,

                    video: 0,

                    lastup: 0,


                    

                    mie :0,

                    telur: 0,

                    bawangmerah: 0,

                    bawangputih: 0,

                    kecap: 0,

                    garam: 0,

                    saostiram: 0,

                    merica: 0,

                    air: 0,

                    mieayam: 0,

                    ruko: 0,

                    daunbawang: 0,

                    

                    emerald: 0,



                    diamond: 0,



                    gold: 0,



                    iron: 0,



                    upgrader: 0,







                    common: 0,



                    uncommon: 0,



                    mythic: 0,



                    legendary: 0,



                    superior: 0,



                    pet: 0,







                    horse: 0,

                    osr: 0,

                    os: 0,

                    lastmerkosa: 0,

                    memperkosa: 0,

                    diperkosa: 0,



                    horseexp: 0,



                    cat: 0,



                    catngexp: 0,



                    fox: 0,



                    foxexp: 0,



                    dog: 0,



                    dogexp: 0,







                    horselastfeed: 0,



                    catlastfeed: 0,



                    foxlastfeed: 0,



                    doglastfeed: 0,







                    armor: 0,



                    armordurability: 0,



                    sword: 0,



                    sworddurability: 0,



                    pickaxe: 0,



                    pickaxedurability: 0,



                    fishingrod: 0,
					previousRank: 'Begginer',
					partner: '',



                    fishingroddurability: 0,

                    

                    premium1hari: 0,

                    lastlumber: 0,
					
					







                    lastclaim: 0,



                    lastadventure: 0,



                    lastfishing: 0,



                    lastdungeon: 0,



                    lastduel: 0,



                    lastmining: 0,



                    lasthunt: 0,



                    lastweekly: 0,



                    lastmonthly: 0,



                    lastbunga: 0,

                    

                    lastmancingeasy: 0,



                    note: 0,

                    

                    

                    lastnebang: 0,

                    

                    lastob: 0,

                    

                    lastbunuhi: 0,

                    

                    lastrob: 0,

                    

                    lastbegal: 0,
					
					advenaglory: 0,
	                slayerglory: 0,
					horizonglory: 0,
					ravennaglory: 0,
					apocalypseglory: 0,
					sakanaglory: 0,
					kazariteglory: 0,



                    

                    aksespremium1hari: 0,

                    

                    premium: false,



                    premiumTime: 0,



                    limitjoin: 0,



                }



            let chat = global.db.data.chats[m.chat]



            if (typeof chat !== 'object')



                global.db.data.chats[m.chat] = {}



            if (chat) {



                if (!('isBanned' in chat))



                    chat.isBanned = false



                if (!('welcome' in chat))



                    chat.welcome = true



                if (!('detect' in chat))



                    chat.detect = false



                if (!('sWelcome' in chat))



                    chat.sWelcome = ''



                if (!('sBye' in chat))



                    chat.sBye = ''



                if (!('sPromote' in chat))



                    chat.sPromote = ''



                if (!('sDemote' in chat))



                    chat.sDemote = ''



                if (!('delete' in chat))



                    chat.delete = true



                if (!('antiLink' in chat))



                    chat.antiLink = true



                if (!('viewonce' in chat))



                    chat.viewonce = false



                if (!('antibadword' in chat)) 



                    chat.antibadword = false



                if (!('simi' in chat))



                    chat.simi = false



                if (!('nsfw' in chat))



                    chat.nsfw = false

                    

                    if (!('updateAnime' in chat))

                    chat.updateAnime = false



                if (!('premnsfw' in chat))



                    chat.premnsfw = false



                if (!isNumber(chat.expired))



                    chat.expired = 0



            } else



                global.db.data.chats[m.chat] = {



                    isBanned: false,



                    welcome: true,



                    detect: false,



                    sWelcome: '',



                    sBye: '',



                    sPromote: '',



                    sDemote: '',



                    delete: true,



                    antiLink: true,



                    viewonce: false,



                    antibadword: true,



                    simi: false,



                    expired: 0,



                    nsfw: false,

                    

                    updateAnime: false,



                    premnsfw: false,

                }

                let akinator = global.db.data.users[m.sender].akinator

			if (typeof akinator !== 'object')

				global.db.data.users[m.sender].akinator = {}

			if (akinator) {

				if (!('sesi' in akinator))

					akinator.sesi = false

				if (!('server' in akinator))

					akinator.server = null

				if (!('frontaddr' in akinator))

					akinator.frontaddr = null

				if (!('session' in akinator))

					akinator.session = null

				if (!('signature' in akinator))

					akinator.signature = null

				if (!('question' in akinator))

					akinator.question = null

				if (!('progression' in akinator))

					akinator.progression = null

				if (!('step' in akinator))

					akinator.step = null

				if (!('soal' in akinator))

					akinator.soal = null

			} else

				global.db.data.users[m.sender].akinator = {

					sesi: false,

					server: null,

					frontaddr: null,

					session: null,

					signature: null,

					question: null,

					progression: null,

					step: null, 

					soal: null

				}
				
			
let dungeon = global.db.data[m.sender].dungeon;
if (typeof dungeon !== 'object')
  global.db.data[m.sender].dungeon = {};
dungeon = global.db.data[m.sender].dungeon; // Update variabel dungeon

if (!('name' in dungeon))
  dungeon.name = 'A'; // Tambahkan tanda kutip pada nilai string
if (!('inventor' in dungeon))
  dungeon.inventor = 'Keizha'; // Tambahkan tanda kutip pada nilai string
if (!('creator' in dungeon))
  dungeon.creator = 'Keizha'; // Tambahkan tanda kutip pada nilai string
if (!('conqueredFloors' in dungeon))
  dungeon.conqueredFloors = 0;
if (!('maxFloors' in dungeon))
  dungeon.maxFloors = 5;
if (!('lastFloorBoss ' in dungeon))
  dungeon.lastFloorBoss  = 'Boss A';
if (!('floorMonsters' in dungeon))
  dungeon.floorMonsters = ['1','1','3','3','2'];


            let settings = global.db.data.settings[this.user.jid]



            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}



            if (settings) {



                if (!('self' in settings)) settings.self = false



                if (!('autoread' in settings)) settings.autoread = true



                if (!('restrict' in settings)) settings.restrict = true



                if (!('jadibot' in settings)) settings.jadibot = false



                if (!('autorestart' in settings)) settings.autorestart = true



                if (!('restartDB' in settings)) settings.restartDB = 0



            } else global.db.data.settings[this.user.jid] = {



                self: false,



                autoread: true,



                jadibot: false,



                restrict: true,



                autorestart: true,



                restartDB: 0



            }



        } catch (e) {



            console.error(e)



        }



        if (opts['nyimak'])



            return



        if (!m.fromMe && opts['self'])



            return



        if (opts['pconly'] && m.chat.endsWith('g.us'))



            return



        if (opts['gconly'] && !m.chat.endsWith('g.us'))



            return



        if (opts['swonly'] && m.chat !== 'status@broadcast')



            return



        if (typeof m.text !== 'string')



            m.text = ''







        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)



        const isOwner = isROwner || m.fromMe



        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)



        const isPrems = isROwner || db.data.users[m.sender].premiumTime > 0







        if (opts['queque'] && m.text && !(isMods || isPrems)) {



            let queque = this.msgqueque, time = 1000 * 5



            const previousID = queque[queque.length - 1]



            queque.push(m.id || m.key.id)



            setInterval(async function () {



                if (queque.indexOf(previousID) === -1) clearInterval(this)



                await delay(time)



            }, time)



        }







        if (m.isBaileys)



            return



        m.exp += Math.ceil(Math.random() * 10)







        let usedPrefix



        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]







        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}



        const participants = (m.isGroup ? groupMetadata.participants : []) || []



        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data



        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data



        const isRAdmin = user?.admin == 'superadmin' || false



        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?



        const isBotAdmin = bot?.admin || false // Are you Admin?







        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')



        for (let name in global.plugins) {



            let plugin = global.plugins[name]



            if (!plugin)



                continue



            if (plugin.disabled)



                continue



            const __filename = join(___dirname, name)



            if (typeof plugin.all === 'function') {



                try {



                    await plugin.all.call(this, m, {



                        chatUpdate,



                        __dirname: ___dirname,



                        __filename



                    })



                } catch (e) {



                    // if (typeof e === 'string') continue



                    console.error(e)



                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {



                        let data = (await conn.onWhatsApp(jid))[0] || {}



                        if (data.exists)



                            m.reply(`*Plugin:* ${name}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${m.text}\n\n\`\`\`${format(e)}\`\`\``.trim(), data.jid)



                    }



                }



            }



            if (!opts['restrict'])



                if (plugin.tags && plugin.tags.includes('admin')) {



                    // global.dfail('restrict', m, this)



                    continue



                }



            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')



            let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix



            let match = (_prefix instanceof RegExp ? // RegExp Mode?



                [[_prefix.exec(m.text), _prefix]] :



                Array.isArray(_prefix) ? // Array?



                    _prefix.map(p => {



                        let re = p instanceof RegExp ? // RegExp in Array?



                            p :



                            new RegExp(str2Regex(p))



                        return [re.exec(m.text), re]



                    }) :



                    typeof _prefix === 'string' ? // String?



                        [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :



                        [[[], new RegExp]]



            ).find(p => p[1])



            if (typeof plugin.before === 'function') {



                if (await plugin.before.call(this, m, {



                    match,



                    conn: this,



                    participants,



                    groupMetadata,



                    user,



                    bot,



                    isROwner,



                    isOwner,



                    isRAdmin,



                    isAdmin,



                    isBotAdmin,



                    isPrems,



                    chatUpdate,



                    __dirname: ___dirname,



                    __filename



                }))



                    continue



            }



            if (typeof plugin !== 'function')



                continue



            if ((usedPrefix = (match[0] || '')[0])) {



                let noPrefix = m.text.replace(usedPrefix, '')



                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)



                args = args || []



                let _args = noPrefix.trim().split` `.slice(1)



                let text = _args.join` `



                



                command = (command || '').toLowerCase()



                let fail = plugin.fail || global.dfail // When failed



                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?



                    plugin.command.test(command) :



                    Array.isArray(plugin.command) ? // Array?



                        plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?



                            cmd.test(command) :



                            cmd === command



                        ) :



                        typeof plugin.command === 'string' ? // String?



                            plugin.command === command :



                            false







                if (!isAccept)



                    continue



                m.plugin = name



                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {



                    let chat = global.db.data.chats[m.chat]



                    let user = global.db.data.users[m.sender]



                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned)



                        return // Except this



                    if (name != 'owner-unbanuser.js' && user?.banned)



                        return



                }



                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner



                    fail('owner', m, this)



                    continue



                }



                if (plugin.rowner && !isROwner) { // Real Owner



                    fail('rowner', m, this)



                    continue



                }



                if (plugin.owner && !isOwner) { // Number Owner



                    fail('owner', m, this)



                    continue



                }



                if (plugin.mods && !isMods) { // Moderator



                    fail('mods', m, this)



                    continue



                }



                if (plugin.premium && !isPrems) { // Premium



                    fail('premium', m, this)



                    continue



                }



                if (plugin.group && !m.isGroup) { // Group Only



                    fail('group', m, this)



                    continue



                } else if (plugin.botAdmin && !isBotAdmin) { // You Admin



                    fail('botAdmin', m, this)



                    continue



                } else if (plugin.admin && !isAdmin) { // User Admin



                    fail('admin', m, this)



                    continue



                }



                if (plugin.private && m.isGroup) { // Private Chat Only



                    fail('private', m, this)



                    continue



                }



                if (plugin.register == true && _user.registered == false) { // Butuh daftar?



                    fail('unreg', m, this)



                    continue



                }



                m.isCommand = true



                let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command



                if (xp > 200)



                    m.reply('Ngecit -_-') // Hehehe



                else



                    m.exp += xp



                if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {



                    this.reply(m.chat, `*Dibutuhkan ${plugin.limit} Limit 🎟️*\n*Silahkan Beli Melalui:*\n - *${usedPrefix}buy limit 10*\n\n*Dapatkan Limit Harian Di #limitku Atau Beli Premium Agar Unlimited Limit.*`, m)



                    continue // Limit habis



                }



                if (plugin.level > _user.level) {



                    this.reply(m.chat, `*Level Kamu Tidak Cukup 📊*\n\nDiperlukan Level ${plugin.level} Untuk Menggunakan Perintah Ini\n*Level Kamu: ${_user.level} 📊*`, m)



                    continue // If the level has not been reached

                 

                 }



                 if (plugin.intelligence > _user.intelligence) {



                    this.reply(m.chat, `*Intelligence Kamu Tidak Cukup 🧠*\n\nDiperlukan Intelligence ${plugin.intelligence} Untuk Menggunakan Perintah Ini\n*Intelligence Kamu: ${_user.intelligence} 🧠*\n\n⭐Tips:\n*Dapatkan Info Tentang Intelligence Di #inte*`, m)



                    continue // If the intelligence has not been reached

            

}



                  if (plugin.skillsport > _user.skillsport) {



                    this.reply(m.chat, `*Sports Ability Kamu Tidak Cukup 🎽*\n\nDiperlukan Sports Ability ${plugin.skillsport} Untuk Menggunakan Perintah Ini\n*Sports Ability Kamu: ${_user.skillsport} 🎽*\n\n⭐Tips:\n*Dapatkan Sports Ability Di Library*`, m)



                    continue // If the intelligence has not been reached



                }



                let extra = {



                    match,



                    usedPrefix,



                    noPrefix,



                    _args,



                    args,



                    command,



                    text,



                    conn: this,



                    participants,



                    groupMetadata,



                    user,



                    bot,



                    isROwner,



                    isOwner,



                    isRAdmin,



                    isAdmin,



                    isBotAdmin,



                    isPrems,



                    chatUpdate,



                    __dirname: ___dirname,



                    __filename



                }



                try {



                    await plugin.call(this, m, extra)



                    if (!isPrems)



                        m.limit = m.limit || plugin.limit || false



                } catch (e) {



                    // Error occured



                    m.error = e



                    console.error(e)



                    if (e) {



                        let text = format(e)



                        for (let key of Object.values(global.APIKeys))



                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')



                        if (e.name)



                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {



                                let data = (await conn.onWhatsApp(jid))[0] || {}



                                if (data.exists)



                                    m.reply(`*LAPORAN FITUR ERROR!!!*\n\n*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\`\`\`${text}\`\`\``.trim(), data.jid)



                            }



                        m.reply(text)



                    }



                } finally {



                    // m.reply(util.format(_user))



                    if (typeof plugin.after === 'function') {



                        try {



                            await plugin.after.call(this, m, extra)



                        } catch (e) {



                            console.error(e)



                        }



                    }



                  //if (m.limit)



                      //m.reply(+m.limit + ' 𝗟𝗶𝗺𝗶𝘁 𝗧𝗲𝗿𝗽𝗮𝗸𝗮𝗶 🎟️')



                }



                break



            }



        }



    } catch (e) {



        console.error(e)



    } finally {



        if (opts['queque'] && m.text) {



            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)



            if (quequeIndex !== -1)



                this.msgqueque.splice(quequeIndex, 1)



        }



        //console.log(global.db.data.users[m.sender])



        let user, stats = global.db.data.stats



        if (m) {



            if (m.sender && (user = global.db.data.users[m.sender])) {



                user.exp += m.exp



                user.limit -= m.limit * 1



            }







            let stat



            if (m.plugin) {



                let now = +new Date



                if (m.plugin in stats) {



                    stat = stats[m.plugin]



                    if (!isNumber(stat.total))



                        stat.total = 1



                    if (!isNumber(stat.success))



                        stat.success = m.error != null ? 0 : 1



                    if (!isNumber(stat.last))



                        stat.last = now



                    if (!isNumber(stat.lastSuccess))



                        stat.lastSuccess = m.error != null ? 0 : now



                } else



                    stat = stats[m.plugin] = {



                        total: 1,



                        success: m.error != null ? 0 : 1,



                        last: now,



                        lastSuccess: m.error != null ? 0 : now



                    }



                stat.total += 1



                stat.last = now



                if (m.error == null) {



                    stat.success += 1



                    stat.lastSuccess = now



                }



            }



        }







        try {



            if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)



        } catch (e) {



            console.log(m, m.quoted, e)



        }



        if (opts['autoread'])



            await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })



    }



}







/**



 * Handle groups participants update



 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 



 */



export async function participantsUpdate({ id, participants, action }) {



    if (opts['self'])



        return



    // if (id in conn.chats) return // First login will spam



    if (this.isInit)



        return



    if (global.db.data == null)



        await loadDatabase()



    let chat = global.db.data.chats[id] || {}



    let text = ''



    switch (action) {



                case 'add':



        case 'remove':



            if (chat.welcome) {



                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata



                for (let user of participants) {



                    let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'



                    try {



                        pp = await this.profilePictureUrl(user, 'image')



                    } catch (e) {



                    } finally {



                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :



                            (chat.sBye || this.bye || conn.bye || 'Bye @user')).replace(/@user/g, '@' + user.split`@`[0])



                        let wel = API('males', '/welcome2', {



                                profile: pp,



                                username: await this.getName(user),



                                background: 'https://telegra.ph/file/dcb22ec2005f9df46297b.jpg',



                                groupname: await this.getName(id),



                                membercount: groupMetadata.participants.length



                            })



                            let lea = API('males', '/goodbye2', {



                                profile: pp,



                                username: await this.getName(user),



                                background: 'https://telegra.ph/file/dcb22ec2005f9df46297b.jpg',



                                groupname: await this.getName(id),



                                membercount: groupMetadata.participants.length



                            })



                            



 /* conn.sendButtonDoc(id, wm, text, action == 'add' ? 'ᴡᴇʟᴄᴏᴍᴇ' : 'sᴀʏᴏɴᴀʀᴀᴀ', action === 'add' ? '.intro' : 'Aʟᴅɪ X Aɪsʏᴀʜ', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://instagram/b4c00t4an_s3l3b',



    mediaType: 2, 



    description: sgc,



    title: 'Hᴀʟᴏ Nɢᴀʙ',



    body: wm,



    thumbnail: await(await fetch(action === 'add' ? wel : lea)).buffer(),



    sourceUrl: sgc



     }}



  })*/



  let welcom = 'https://telegra.ph/file/e804226269d5ce9a5a572.jpg'







  let godbye = 'https://telegra.ph/file/a41b7233f3f33f29df5bf.jpg'



  conn.sendButtonImg(id, await(await fetch(action === 'add' ? wel : lea)).buffer(), 'Group Messege', text, action == 'add' ? '𝗪𝗲𝗹𝗰𝗼𝗺𝗲' : '𝗚𝗼𝗼𝗱𝗯𝘆𝗲', action === 'add' ? '.intro' : '么 Kitsuneee', fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://instagram.com',



    mediaType: 2, 



    description: sgc,



    title: "ᴘʟᴇᴀsᴇ ᴊᴏɪɴ",



    body: wm,



    thumbnail: await(await fetch(action === 'add' ? welcom : godbye)).buffer(),



    sourceUrl: sgc



     }}



  })



  



                    }



                }



            }



            break



        case 'promote':



            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```Naik Akses Menjadi Admin```')



        case 'demote':



            if (!text)



                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```Turun Akses Menjadi Member```')



            text = text.replace('@user', '@' + participants[0].split('@')[0])



            if (chat.detect)



                this.sendMessage(id, { text, mentions: this.parseMention(text) })



/*let flaaa2 = [



'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',



'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',



'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',



'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',



'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']



conn.sendButtonImg(id, `${pickRandom(flaaa2)}` + `Congratulation ` + '@user', 'Sᴇʟᴀᴍᴀᴛ Nᴀɪᴋ Jᴀʙᴀᴛᴀɴ', text, mentions: this.parseMention(text), { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://facebook.com/sadtime098',



    mediaType: 2, 



    description: sgc,



    title: "Jᴀɴɢᴀɴ Lᴜᴘᴀ Mᴀɴᴅɪ!!",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })*/



            break



    }



}







/**



 * Handle groups update



 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 



 */



export async function groupsUpdate(groupsUpdate) {



    if (opts['self'])



        return



    for (const groupUpdate of groupsUpdate) {



        const id = groupUpdate.id



        if (!id) continue



        let chats = global.db.data.chats[id], text = ''



        if (!chats?.detect) continue



        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)



        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)



        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)



        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)



        if (!text) continue



        await this.sendMessage(id, { text, mentions: this.parseMention(text) })



    }



}







export async function deleteUpdate(message) {



    try {



        const { fromMe, id, participant } = message



        if (fromMe)



            return



        let msg = this.serializeM(this.loadMessage(id))



        if (!msg)



            return



        let chat = global.db.data.chats[msg.chat] || {}



        if (chat.delete)



            return



            



        await conn.send2ButtonDoc(msg.chat, `Terdeteksi @${participant.split`@`[0]} Telah Menghapus Pesan*`, '\nᴍᴀᴛɪᴋᴀɴ ғɪᴛᴜʀ ᴋʟɪᴋ ʙᴜᴛᴛᴏɴ ᴅɪʙᴀᴡᴀʜ', '𝗗𝗜𝗦𝗔𝗕𝗟𝗘 𝗔𝗡𝗧𝗜-𝗗𝗘𝗟𝗘𝗧𝗘', '.disable antidelete', '𝗢𝗪𝗡𝗘𝗥', '.Owner', msg, { contextInfo: { externalAdReply: {



title: 'ғɪᴛᴜʀ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ',



body: wm, 



thumbnail: fs.readFileSync("./thumbnail.jpg"),



mediaType:1,



mediaUrl: "https://telegra.ph/file/4772ab104cf7a801288fd.jpg",



sourceUrl: snh 



}}})



        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))



    } catch (e) {



        console.error(e)



    }



}







global.dfail = (type, m, conn) => {



const fgclink = {



           "key": {



               "fromMe": false,



               "participant": "0@s.whatsapp.net",



               "remoteJid": "0@s.whatsapp.net"



           },



           "message": {



               "groupInviteMessage": {



                   "groupJid": "6282127487538-1625305606@g.us",



                   "inviteCode": "null",



                   "groupName": "Halo", 



                   "caption": wm, 



                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')



               }



           }



       }



       let tag = `@${m.sender.replace(/@.+/, '')}`



  let mentionedJid = [m.sender]



    let rown = {



        rowner: '𝗢𝗡𝗟𝗬 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥\n\n*_Command Ini Hanya Untuk Developer_*'}[type]



  if (rown) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, rown + '\n\n\n\n', '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })







        



let own = {



owner: '𝗢𝗡𝗟𝗬 𝗢𝗪𝗡𝗘𝗥\n\n*_ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴏᴡɴᴇʀ ʙᴏᴛ_*'}[type]



  if (own) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, own + '\n\n\n\n', '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })







let mod = {



mods: '𝗢𝗡𝗟𝗬 𝗠𝗢𝗗𝗘𝗥𝗔𝗧𝗢𝗥\n\n*_ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴍᴏᴅᴇʀᴀᴛᴏʀ ʙᴏᴛ_*'}[type]



  if (mod) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, mod + '\n\n\n\n', '𝗠𝗘𝗡𝗨', '.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })



let prm = {



        premium: '𝗢𝗡𝗟𝗬 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗨𝗦𝗘𝗥\n\n*_Command Ini Hanya Untuk Premium User_*'}[type]



  if (prm) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, prm + '\n\n\n\n', '𝗕𝗨𝗬 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗔𝗖𝗖𝗘𝗦𝗦', '.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })







let gc = {



        group: '𝗚𝗥𝗢??𝗣 𝗖𝗛𝗔𝗧\n\n*_Command Ini Hanya Bisa Dipakai Digrup_*\n\n*_https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa_*'



        }[type]



  if (gc) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, gc + '\n\n\n\n', '𝗠𝗘𝗡𝗨', '.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })







let msg = {



        private: '𝗣𝗥𝗜𝗩𝗔𝗧𝗘 𝗖𝗛𝗔𝗧\n\n*_Command Ini Hanya Bisa Dipakai Diprivate Chat_*',



        admin: '𝗢𝗡𝗟𝗬 𝗔𝗗𝗠𝗜𝗡\n\n*_Command Ini Hanya Untuk Admin Grup_*',



        botAdmin: '𝗢𝗡𝗟𝗬 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡\n\n*_Bot Harus Menjadi Admin Untuk Menggunakan Fitur Ini_*',



        restrict: '𝗥𝗘𝗦𝗧𝗥𝗜𝗖𝗧\n\n*_Restrict Belum Aktif_*'}[type]



  /*  if (msg) return conn.sendButtonDoc(m.chat, msg, wm, 'Menu', '.menu', fgclink)*/



  if (msg) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, msg + '\n\n\n\n', '𝗠𝗘𝗡𝗨', '.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,



    mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',



    mediaType: 2, 



    description: sgc,



    title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",



    body: wm,



    thumbnail: fs.readFileSync('./thumbnail.jpg'),



    sourceUrl: sgc



     }}



  })



  



  



    let msgg = {
	unreg: '*Hai Kak 👋*\n\n*_Anda Harus Daftar Terlebih Dahulu_*\n*_Tekan Button Dibawah Untuk Melihat Cara Daftar_*'



}[type]



if (msgg) return conn.sendButtonDocAccess(m.chat, `${ucapan()} ` + tag, msgg + '\n\n\n\n', '𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗘 𝗥', '.daftar', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
mediaUrl: 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa',
mediaType: 2, 
description: sgc,
title: "ᴊᴏɪɴ ᴛʜᴇ ᴏғғɪᴄɪᴀʟ ɢʀᴏᴜᴘ",
body: wm,
thumbnail: fs.readFileSync('./thumbnail.jpg'),
sourceUrl: sgc
}}

 })



}


function ucapan() {



  const time = moment.tz('Asia/Jakarta').format('HH')



  let res = "Sudah Dini Hari Kok Belum Tidur?"



  if (time >= 4) {



    res = "Pagi Kak 🌄"



  }



  if (time >= 10) {



    res = "Siang Kak ☀️"



  }



  if (time >= 15) {



    res = "Sore Kak🌇"



  }



  if (time >= 18) {



    res = "Malam Kak🌙"



  }



  return res



}



function pickRandom(list) {



     return list[Math.floor(Math.random() * list.length)]



     }



let file = global.__filename(import.meta.url, true)



watchFile(file, async () => {



    unwatchFile(file)



    console.log(chalk.redBright("Update 'handler.js'"))



    if (global.reloadHandler) console.log(await global.reloadHandler())



})