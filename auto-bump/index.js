
const Discord = require("discord.js") 
const client = new Discord.Client({disableEveryone: false});

//DISCORD.JS V11
//npm install discord.js@11


let token = " "
let channelidBUMP = "  "

client.login(token).catch((err) => {console.log('Token du bot non fonctionnel')})



client.on("ready", async => {
console.log('Bot prêt: '+client.user.username)
  setInterval(() => {
        var channel = client.channels.get(channelidBUMP)
        if(!channel) return ("bump channel invalide")
  channel.send("!d bump").catch(console.error); // add error handling here

      console.log("bump envoyé ")
      }, 3600000);

})
