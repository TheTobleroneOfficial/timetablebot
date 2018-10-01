const Discord = require("discord.js-commando");
const bot = new Discord.Client();
const TOKEN = 'NDk2MzU4MzA3MjUwOTYyNDQy.DpPfhA.lGHd5eXvvAUkNGmNEJzLBW5fXso';

bot.registry.registerGroup("toby", "Toby");
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on("message", function(message){
    switch(message.content){
        case ".monday Toby":
        message.reply("Toby has nothing needed to do on Monday!");
        break;
        case ".tuesday Toby":
        message.reply("On Tuesday Toby needs to Hoover the Stairs and have a Bath!");
        break;
        case ".wednesday Toby":
        message.reply("Toby has nothing needed to do on Wednesday!");
        break;
        case ".thursday Toby":
        message.reply("On Thursday Toby needs to have a bath. Dakota also needs one!");
        break;
        case ".friday Toby":
        message.reply("Toby, along with everyone else, needs to Tidy his room!");
        break;
        case ".saturday Toby":
        message.reply("Toby needs to strip his bed, and so does Analiesse! He also needs to Hoover the stairs and have a Bath. Dakota and Saxon also need a bath!");
        break;
        case ".sunday Toby":
        message.reply("Toby has got to do nothing on Sunday!");
        break;
        case ".monday Analiesse":
        message.reply("Analiesse has got to do the Hoovering, in general!");
        break;
        case ".tuesday Analiesse":
        message.reply("Analiesse doesn't need to do anything on Tuesday!");
        break;
        case ".wednesday Analiesse":
        message.reply("Analiesse has nothing needed to do on Wednesday!");
        break;
        case ".thursday Analiesse":
        message.reply("On Thursday Analiesse needs to Hoover the stairs!");
        break;
        case ".friday Analiesse":
        message.reply("Analiesse has got to tidy her bedroom, so does everyone else!");
        break;
        case ".saturday Analiesse":
        message.reply("Analiesse needs to strip her bed, and so does Toby!");
        break;
        case ".sunday Analiesse":
        message.reply("Analiesse has got to have a Bath on Sunday!");
        break;
        case ".monday Dakota":
        message.reply("Dakota has to have a bath on Monday! Saxon also needs a bath!");
        break;
        case ".tuesday Dakota":
        message.reply("Dakota has nothing needed to do on Tuesday!");
        break;
        case ".wednesday Dakota":
        message.reply("Dakota has nothing needed to do on Wednesday!");
        break;
        case ".thursday Dakota":
        message.reply("On Thursday Dakota needs to have a bath! Also Toby needs one!");
        break;
        case ".friday Dakota":
        message.reply("Dakota, along with everyone else, needs to Tidy her room!");
        break;
        case ".saturday Dakota":
        message.reply("Dakota needs to have a Bath. Toby and Saxon also need a bath!");
        break;
        case ".sunday Dakota":
        message.reply("Dakota has got to Strip her Bed on Sunday! Mum also has to Strip Saxons Bed!");
        break;
        case ".monday Saxon":
        message.reply("Saxon has got to have a Bath on Monday. Dakota also needs one!");
        break;
        case ".tuesday Saxon":
        message.reply("Saxon doesn't need to do anything on Tuesday!");
        break;
        case ".wednesday Saxon":
        message.reply("Saxon doesn't need to do anything on Wednesday!");
        break;
        case ".thursday Saxon":
        message.reply("Saxon doesn't need to do anything on Thursday!");
        break;
        case ".friday Saxon":
        message.reply("Saxon, along with everyone else, needs to tidy his room!");
        break;
        case ".saturday Saxon":
        message.reply("Saxon needs to have a bath, so do Toby and Dakota!");
        break;
        case ".sunday Saxon":
        message.reply("Saxon needs to have his bed stripped!");
        break;
        case ".cls":
        message.channel.bulkDelete(100);
        break;
    }

})

bot.on("ready", function(){
    console.log("Ready");
})

bot.login(TOKEN);