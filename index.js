const Aoijs = require("aoi.js")


const bot = new Aoijs.Bot({
mobile: false,
token: "tu token", 
prefix: ["tu prefix"], 
})

bot.onMessage() 

bot.status({

  text: "¡Hola soy un Bot!",

  type: "PLAYING",

  time: 12

})

bot.variables({
})

bot.loadCommands(`./Comandos/`)

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'LINK',
    title: 'NAME',
    interval: 2 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

 
