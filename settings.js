/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': '50213C75AF', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['6281290867594','6281290867594','6281290867594']
global.premium = ['6281290867594
global.ownernomer = '6281290867594'
global.ownername = 'Tristan YT'
global.botname = 'IzumiBot'
global.footer = 'Tristan'
global.ig = 'https://instagram.com/tristangameryt4'
global.email = 'tristanaditya13@gmail.com'
global.region = 'Indonesia'
global.sc = '-'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Tristan'
global.author = 'IzumiBot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 50
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
