/*

 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['919645697828'] // Owner number ,
global.pemilik = ['919645697828'] //Change  it , 
global.premium = ['919645697828'] //Change it 
global.pengguna = 'ʙͥᴀͭᴅᷤʙᷟᴏͤʏ' // Your name
global.botnma = '💃 ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ ʙᴏᴛ 💃' // Your bot name ,
global.ownernma = 'ʙͥᴀͭᴅᷤʙᷟᴏͤʏ' //ownernama,ownername
global.packname = 'ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ ʙᴏᴛ // Sticker package name 
global.author = 'ʙͥᴀͭᴅᷤʙᷟᴏͤʏ' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage.💃
global.alivelogo = `https://i.ibb.co/jyKDmsP/20220801-152954.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage.
global.welcome = `
🌀 Thanks Fro using ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ ʙᴏᴛ
✾ Some bugs fixing
😼♥️
`
// add 
global.sendwelcome = `add`
// Good bye
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ 𝐌𝐃`
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'This cmd is for ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ ʙᴏᴛ owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait ʙͥᴀͭᴅᷤʙᷟᴏͤʏ ᴍ̶͢ᴏ̶ᴅ̶ᴇ̶ʀ̶ ʙᴏᴛ processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
