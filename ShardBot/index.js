const prompt=require("prompt-sync")({sigint:true}); 
const mineflayer = require('mineflayer')

var email = prompt("Enter your Microsoft Email: ");
var password = prompt("Enter your Microsoft password: ")

const bot = mineflayer.createBot({
    host: 'DonutSMP.net',
    port: 25565,
    username: email,
    password: password,
    auth: 'microsoft'
})

console.log("\nShard Bot for DonutSMP.net developed by pheonnisgay\ndesigned to farm afk shards without being in minecraft\n\n\n")

bot.on('connect', function () {
    console.info("[CONNECTION/" + bot._client.username + "] Connected!");
});

bot.on('spawn', () => {
    bot.chat('/afk')
})


bot.on('chat', (username, message) => {
    console.log('[CHAT/' + bot._client.username + '] <' + username + '> ' + message);
})

bot.on('kicked', console.log)
bot.on('error', console.log)