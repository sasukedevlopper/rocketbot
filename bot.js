const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ""
var admin = "."
const fs = require("fs")
const moment = require("moment")
const ms = require('ms');
const db = require('to-time');
const cd = require('countdown');
const enmap = require('enmap');
const pretty = require("pretty-ms")
const jimp = require ("jimp")
const Canvas = require("canvas")
const bettersqlitepool = require('better-sqlite-pool');
const http = require('http');
const express = require('express');
const app = express();
var prfs = "."


client.commands = new Discord.Collection();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://rocketbot.glitch.me`);
}, 280000);

client.on('ready', () => {
client.user.setActivity(`.help | .inv`)
console.log(`
? | Name ${client.user.tag}
? | Servers ${client.guilds.size}
? | Users ${client.users.size}
By : iiMrSasukeDEV`);
});


// command handler

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("message", msg => {
  var messagearray = msg.content.split(" ")
  var cmd = messagearray[0]
  var args = messagearray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length))
  var message = msg
  if(commandfile) commandfile.run(client,msg,message)
  
})

var devs = ["432231487916736542","202745501345382400","365929628226945028","564489364713898005","400480707165552641"]
var developers = ["432231487916736542","202745501345382400","365929628226945028","564489364713898005","400480707165552641"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`:white_check_mark: | Client Watching Now Is : \`${argresult}\``)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`:white_check_mark: | Client Listening Now Is : \`${argresult}\``)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/SasukeGaming03");
     message.channel.send(`:white_check_mark: | Client Streaming Now Is : \`${argresult}\``)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`:white_check_mark: | Client Name Changed To : \`${argresult}\``)
} else
if (message.content.startsWith(admin + 'setavatar')) {
   client.user.setAvatar(argresult);
   message.channel.send(`:white_check_mark: | Client Avatar Changed To : ${argresult}`)
}
});








client.on("message", msg => {
if(msg.author.bot) return;
if(msg.content.startsWith(prfs + "help")) {
msg.author.send(`**? | Public Commands

» \`${prfs}ping\` : To Show Ping

» \`${prfs}server\` : To Show Info For Server

» \`${prfs}avatar [ID]\` : To Show Avatar
**Using** : \`${prfs}avatar [ID]\`

» \`${prfs}icon [ID]\` : To Show Server Icon
**Using** : \`${prfs}icon [ID]\`

» \`${prfs}link\` : To Take The Server Link

» \`${prfs}roleinfo [RoleName]\` : To See Role Info
**Using** : \`${prfs}roleinfo [RoleName]\`

» \`${prfs}user [Mention/ID]\` : To See Some User Information 
**Using** : \`${prfs}user [Mention/ID]\`

? | Admin Commands 

» \`${prfs}ban [Mention/ID]\` : For Banned User
**Using** : \`${prfs}ban [Mention/ID]\`

» \`${prfs}kick [Mention/ID]\` : For Kick User 
**Using** : \`${prfs}kick [Mention/ID]\`

» \`${prfs}mute [Mention/ID]\` : For Muted User
**Using** : \`${prfs}mute [Mention/ID]\`

» \`${prfs}unmute [Mention/ID]\` : For Unmute User
**Using** : \`${prfs}unmute [Mention/ID]\`

» \`${prfs}clear [MessageNum]\` : For Clear Room
**Using** : \`${prfs}clear [MessageNum]\`

» \`${prfs}moveall\` : For Moved all User In Your Room

» \`${prfs}mchannel\` : To Close Room

» \`${prfs}unmchannel\` : To Open Room

» \`${prfs}cv [Name]\`: For Create Voice Room
**Using** : \`${prfs}cv [Name]\`

» \`${prfs}ct [Name]\` : For Create Text Room
**Using** : \`${prfs}ct [Name]\`

? | Profile Commands

» \`${prfs}credit\` : To Show Your Credit(s) And Trans Credit(s)

» \`${prfs}daily\` : To Take Daily

» \`${prfs}rep\` : For Give Like

? | Info Commands

» \`${prfs}instagram [UserName]\`: To See Information User In Instagram
**Using** : \`${prfs}instagram [UserName]\`

» \`${prfs}roblox [UserName]\` : To See Information User In Roblox
**Using** : \`${prfs}roblox [UserName]\`

? Dashboard | Soon !!
? Server Support | https://discord.gg/8NfWSYb
? Invite Bot | https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot
**`)
  msg.channel.send("**:white_check_mark: | Go to your** \`Dm\` T See the **Help Menu.**")
  }
})

client.on("message", msg => {
let mcs1 = client.guilds.get("587348304560390145").emojis.find(r => r.name === "online");
let mcs2 = client.guilds.get("587348304560390145").emojis.find(r => r.name === "dnd");
let mcs3 = client.guilds.get("587348304560390145").emojis.find(r => r.name === "Idk");
let mcs4 = client.guilds.get("587348304560390145").emojis.find(r => r.name === "inv");
if(msg.author.bot) return undefined;
let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
if(msg.content.startsWith(prfs + "server")) {
let server = new Discord.RichEmbed()
.setAuthor(msg.author.username,msg.author.avatarURL)
.setColor("BLUE")
.setTitle(`? Guild Name : \`${msg.guild.name}\``)
.addField("? Guild Owner",`» ${msg.guild.owner}` ,true)
.addField("? Guild ID",`» \`${msg.guild.id}\`` ,true)
.addField("? Guild Member",`» \`${msg.guild.memberCount}\`` ,true)
.addField("? Guild Region",`» \`${msg.guild.region}\`` ,true)
.addField("? Guild States Member",`» ${mcs1} | Online : \`${msg.guild.members.filter(m=>m.presence.status == 'online').size}\`
» ${mcs2} | Do Not Disturb : \`${msg.guild.members.filter(m=>m.presence.status == 'dnd').size}\`
» ${mcs3} | Idle : \`${msg.guild.members.filter(m=>m.presence.status == 'idle').size}\`
» ${mcs4} | Offline : \`${msg.guild.members.filter(m=>m.presence.status == 'offline').size}\`` ,true)
.addField("? Guild Rooms",`» **${msg.guild.channels.filter(m => m.type === 'voice').size}** Voice | **${msg.guild.channels.filter(m => m.type === 'text').size}** Text` ,true)
.addField("? Guild Roles",`» \`${msg.guild.roles.size}\`` ,true)
.addField("? Guild Verification",`» \`${msg.guild.verificationLevel}\` | \`${verifyL[msg.guild.verificationLevel]}\`` ,true)
.setThumbnail(msg.guild.iconURL)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
msg.channel.send(server)
}
})

client.on("message", msg => {
if(msg.author.bot) return;
if(msg.content.startsWith(prfs + "invite")) {
msg.author.send(`**https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot **`)
msg.react("?")
}
})

client.on("message", msg => {
if(msg.author.bot) return;
if(msg.content.startsWith(prfs + "support")) {
msg.author.send(`**https://discord.gg/WBqBTWt **`)
msg.react("?")
}
})


client.on('guildCreate', guild => {
let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`? \`${client.user.username}\` Join New Server.`)
.addField("? Server/ID:",`» \`${guild.name}\` | \`(ID: ${guild.id})\``)
.addField("? Server Owner:",`» ${guild.owner}`)
.addField("? Member Count:",`» \`${guild.memberCount}\``)
.addField("? Servers Counter:",`» \`${client.guilds.size}\``)
client.channels.get("606519484471181315").send(embed)
})
client.on('guildDelete', guild => {
let embed = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`\`${client.user.username}\` Leave New Server.`)
.addField("? Server/ID:",`» \`${guild.name}\` | \`(ID: ${guild.id})\``)
.addField("? Server Owner:",`» ${guild.owner}`)
.addField("? Member Count:",`» \`${guild.memberCount}\``)
.addField("? Servers Counter:",`» \`${client.guilds.size}\``)
client.channels.get("606519484471181315").send(embed)
})
const roblox = require("noblox.js")
client.on("message", msg => {
if(msg.author.bot) return undefined;
if(msg.content.startsWith(prfs + "roblox")) {
let args = msg.content.split(" ").slice(1).join(" ");
if(!args) return msg.channel.send(`**:x: | Error , Please Type Command True Ex: \`${prfs}roblox [UserName]\`**`)
roblox.getIdFromUsername(args).then(id => {
roblox.getPlayerInfo(parseInt(id)).then(player => {
let roblox = new Discord.RichEmbed()
.setAuthor(msg.author.username,msg.author.avatarURL)
.setColor("BLUE")
.setTitle(`**» Roblox: \`${player.username}\`**`)
.setURL(`https://www.roblox.com/users/${id}/profile`)
.addField("? Username",`» ${player.username}`)
.addField("? User ID",`» ${id}`)
.addField("? User Blurb",`» ${player.blurb || 'Nothing'}`)
.addField("? User Status",`» ${player.status || 'Nothing'}`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
msg.channel.send(roblox)
})
}).catch(e => {
msg.channel.send("**:x: | Error , I Can\'t Find This User**" + ` \`${args}\``)
})
}
})

client.on('message', message => {
if(message.content.startsWith(prfs + 'instagram')) {
let args = message.content.split(" ").slice(1).join(" ");
if(!args) return message.channel.send(`**:x: | Error , Please Type Command True Ex: \`${prfs}instagram [UserName]\`**`)
const instagram = require("user-instagram")
instagram("https://www.instagram.com/" + args).then(data => {
let InstagramS = new Discord.RichEmbed()
.setColor('BLUE')
.setTitle(`**» Instagram Link: \`${data.username}\`**`)
.setURL(`https://www.instagram.com/${data.username}`)
.setThumbnail(`${data.avatarHD}`)
.addField("? UserName",`» \`${data.username}\``)
.addField("? FullName",`» \`${data.fullName}\``)
.addField("? ID",`» \`${data.id}\``)
.addField("? Description",`» \`${data.bio || "No Description"}\``)
.addField("? Following",`» \`${data.subscriberCount}\``)
.addField("? Followers",`» \`${data.subscribtions}\``)
.addField("? PostsCount",`» \`${data.postCount}\``)
.addField("? Private",`» \`${data.isPrivate}\``)
.addField("? Verified",`» \`${data.isVerified}\``)
.setFooter(message.author.tag,message.author.avatarURL)
message.channel.send(InstagramS)
}).catch(e => {
message.channel.send("**:x: | Error , I Can\'t Find This User**" + ` \`${args}\``)
})
}
});

let lastVoice = {};
client.on("voiceStateUpdate", (oldMember, newMember) => {
    if(!newMember.voiceChannel) {
        lastVoice[newMember.id] = {
            time: (new Date).getTime()
        }
    }
});
client.on("message", message => {
if(message.content.startsWith(prfs + "user")) {
let args = message.content.split(" ")[1];
let mention = message.mentions.users.first()|| message.author || message.guild.members.get(args)
if(!mention) return message.channel.send(`**:x: | Error , Please Type Command True Ex: \`${prfs}user [Mention/ID]\`**`)
var last;
if(!lastVoice[mention.id]) { 
if(message.member.voiceChannel) last = `Last See In Voice: \`${message.member.voiceChannel.name}\``;
else last = `This User ${mention.tag} Never Join Any Room`;
} else last =  Math.floor(((new Date).getTime() - lastVoice[mention.id].time) / 1000 / 60 / 60) + " Hours, " + Math.floor(((new Date).getTime() - lastVoice[message.author.id].time) / 1000 / 60 ) + " Minutes, " +  Math.floor(((new Date).getTime() - lastVoice[message.author.id].time) / 1000) + " Seconds"
let user = new Discord.RichEmbed()
.setColor("RED")
.setThumbnail(mention.avatarURL)
.addField("? Name",`\`${mention.tag}\` | \`(ID: ${mention.id})\``)
.addField("? Created At",`» \`${moment(mention.createdAt).format('D/MM/YYYY h:mm a')}\``)
.addField("? Joined At",`» \`${moment(mention.joinedAt).format('D/MM/YYYY h:mm a')}\``)
.addField("? InVoice",`» ${last}`)
.setFooter(mention.username,mention.avatarURL);
message.channel.send(user)
}
});


client.on("message", msg => {
let no = client.guilds.get("587348304560390145").emojis.find(r => r.name === "false");
if(msg.author.bot) return undefined;
if(msg.content.startsWith(prfs + "mchannel")) {
if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`**${no} | Sorry But You Dont Have Permission \`MANAGE_CHANNELS\`**`);
msg.channel.overwritePermissions(msg.guild.id, {
SEND_MESSAGES: false
}).then(() => {
msg.channel.send("**:white_check_mark: | Done I Have Close Channel.**")
})
}
if(msg.content.startsWith(prfs + "unmchannel")) {
if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`**${no} | Sorry But You Dont Have Permission \`MANAGE_CHANNELS\`**`);
msg.channel.overwritePermissions(msg.guild.id, {
SEND_MESSAGES: true
}).then(() => {
msg.channel.send("**:white_check_mark: | Done I Have Open Channel.**")
})
}
})

client.on("message", msg => {
let no = client.guilds.get("587348304560390145").emojis.find(r => r.name === "false");
if(msg.author.bot) return undefined;
if(msg.content.startsWith(prfs + "cv")) {
if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`**${no} | Sorry But You Dont Have Permission \`MANAGE_CHANNELS\`**`);
let cvname = msg.content.split(" ")[1];
if(!cvname) return msg.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}cv [NameRoom]\`**`)
msg.guild.createChannel(cvname.join(' '), 'voice');
msg.channel.sendMessage(`**:white_check_mark: | Done I Have Create Voice Room.**`)
}
if(msg.content.startsWith(prfs + "ct")) {
if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send(`**${no} | Sorry But You Dont Have Permission \`MANAGE_CHANNELS\`**`);
let ctname = msg.content.split(" ")[1];
if(!ctname) return msg.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}ct [NameRoom]\`**`)
msg.guild.createChannel(ctname.join(' '), 'text');
msg.channel.sendMessage(`**:white_check_mark: | Done I Have Create Text Room.**`)
}
})

client.on('message',async message => {
if(message.author.bot) return undefined;
if(message.content.startsWith(prfs + "roleinfo")) {
let role1 = message.content.split(" ").slice(1).join(" ");
let role = message.guild.roles.find('name',role1) || message.guild.roles.get(role1);
if(!role1) return message.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}roleinfo [RoleName]\`**`);
if(!role) return message.channel.send('**:x: | Error , I Can\'t Find This Role**');
let roleinfo = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor("BLUE")
.addField('? Role Name',`» \`${role.name}\``,true)
.addField('? Role ID',`» \`${role.id}\``,true)
.addField('? Role Color',`» \`${role.hexColor}\``,true)
.addField('? Role CreateAt',`» \`${role.createdAt.toLocaleString()}\``,true)
.setThumbnail(message.guild.iconURL)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
message.channel.send(roleinfo);
}
});



const credits = JSON.parse(fs.readFileSync('./credits.json'));
const creditsPath = './credits.json';
var time = require("./time.json");
client.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
let args = message.content.split(' ');
let author = message.author.id;
if(!credits[author]) credits[author] = {
credits: 0
}
if(!credits[author]) credits[author] = {
blacklist: false
}
fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
if(credits[message.author.id].blacklist === true) return undefined;
if(args[0].toLowerCase() == `${prfs}credit` || args[0].toLowerCase() === `${prfs}credits`) {
const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
const mentionn = message.mentions.users.first() || client.users.get(args[1]);
if(!args[2]) {
message.channel.send(`**:money_with_wings: | ${mention.username}, Have Credits \`$${credits[mention.id].credits}\`**`)
} else if(mentionn && args[2]) {
if(isNaN(args[2])) return message.channel.send(`**:x: | Error**`);
if(args[2] < 1) return message.channel.send(`**:x: | Error**`);
if(mention.bot) return message.channel.send(`**:x: | Error**`);      
if(mentionn.id === message.author.id) return message.channel.send(`**:x: | Error**`);
if(args[2] > credits[author].credits) return message.channel.send(`**:x: | Error , You Don't Have Enough Credit**`);
if(args[2].includes("-")) return message.channel.send(`**:x: | Error**`);
if(args[2].includes(".")) return message.channel.send(`**:x: | Error**`);
let first = Math.floor(Math.random() * 9);
let second = Math.floor(Math.random() * 9);
let third = Math.floor(Math.random() * 9);
let fourth = Math.floor(Math.random() * 9);
let num = `${first}${second}${third}${fourth}`;
let canvas = Canvas.createCanvas(150 , 50)
let ctx = canvas.getContext('2d');
const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/606837977532071957/608449967199354881/20190807_010123.jpg");
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".gif" : message.author.displayAvatarURL;
jimp.read(url, (err, ava) => {
if(err) return console.log(err);
ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
if(err) return console.log(err);
ctx.font = "sans-serif";
ctx.fontSize = '100px';
ctx.fillStyle = "#ffffff";
message.channel.send(`**${message.author.username}, You Will Trans \`$${args[2]}\` To ${mentionn} 
If You Want To Complete Trans Type: \`${num}\`**`).then(essss => {
ctx.fillText(num, canvas.width / 2.4, canvas.height / 1.7);
message.channel.sendFile(canvas.toBuffer()).then(m => {
message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors:['time'] }).then(collected => {
if(collected.first().content === num) {
client.channels.get("609946394966360097").send(`**
Êã ÇáÊÍæá ãä : ${message.author.username} | (ID: \`${message.author.id}\`)
Êã ÇáÊÍæá Çáí : ${mentionn.username} | (ID: \`${mentionn.id}\`)
ÇáãÈáÛ : \`$${args[2]}\`
**`);
message.channel.send(`**:moneybag: | ${message.author.username}, Done Trans \`$${args[2]}\` To ${mentionn}**`);
mention.send(`**:money_with_wings: | Transfer Receipt** \`\`\`You Have Received \`$${args[2]}\` From User ${message.author.username}; (ID (${message.author.id})\`\`\``);
m.delete();
credits[author].credits += Math.floor((-args[2]));
credits[mentionn.id].credits += Math.floor((+args[2]));
fs.writeFileSync(creditsPath, JSON.stringify(credits, null, 4));
} else {
m.delete();
essss.delete();
}
})
})
})
})
})
}else {
message.channel.send(`**:x: | Error , Please Command True Ex: \`${prfs}redit [MentionUser] [Balance]\`**`);
}
}
if(args[0].toLowerCase() === `${prfs}daily`) {
let cooldown = 8.64e+7
let Daily = time[message.author.id]
if (Daily !== null && cooldown - (Date.now() - Daily) > 0) {
let times = (cooldown - (Date.now() - Daily));
message.channel.send(`**:stopwatch: | ${message.author.username}, Please Wait \`(${pretty(times, {verbose:true})})\` To Take Your Daily Again.**`);
fs.writeFile("./time.json", JSON.stringify(time), function(e) {
if(e)throw e;
})
}else{
let ammount = (300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
credits[author].credits += ammount;
time[message.author.id] = Date.now();
message.channel.send(`**:money_with_wings:| ${message.author.username}, Done You Have Take Your Daily \`$${ammount}\`**`);
fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
if(e)throw e;
})
}
}
});
var guild = '609944598667722881';
var channel = '609948993224441882';
client.on("message", msg => {
if(msg.content.startsWith(prfs + "add-blacklist")) {
if(!msg.guild.roles.exists("name", "› Mange Blacklist")) return undefined;
if(!guild.includes(msg.guild.id)) return;
if(!channel.includes(msg.channel.id)) return;
let user = client.users.get(msg.content.split(" ")[1])
let reason = msg.content.split(" ").slice(2).join(" ");
if(!reason || !user) return msg.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}add-blacklist [ID] [Reason]\`**`);
let channelssl = client.channels.get("615504865648574464")
channelssl.send(`**:white_check_mark: | Done I Have Add <@${user.id}> To BlackList, Reason: \`${reason}\` By: <@${msg.author.id}>**`)
credits[user.id].blacklist = true
fs.writeFile("./credits.json", JSON.stringify(credits), function(w) {
if (w) throw w;
})
}
})
var guildr = '609944598667722881';
var channelr = '609949041199022091';
client.on("message", msg => {
if(msg.content.startsWith(prfs + "remove-blacklist")) {
if(!msg.guild.roles.exists("name", "› Mange Blacklist")) return undefined;
if(!guildr.includes(msg.guild.id)) return;
if(!channelr.includes(msg.channel.id)) return;
let user = client.users.get(msg.content.split(" ")[1])
if(!user) return msg.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}remove-blacklist [ID] [Reason]\`**`)
let channelsl = client.channels.get("615820384582893568")
channelsl.send(`**:white_check_mark: | Done I Remove <@${user.id}> From BlackList, By: <@${msg.author.id}>**`)
msg.channel.send("**:white_check_mark: | Done.**")
credits[user.id].blacklist = false
fs.writeFile("./credits.json", JSON.stringify(credits), function(w) {
if (w) throw w;
})
}
});
var guildT = '609944598667722881';
var channelT = '609949153102921749';
client.on("message", msg => {
if(msg.author.bot) return undefined
if(msg.content.startsWith(prfs + "rcredit")) {
if(!msg.guild.roles.exists("name", "› Mange RemoveCredit")) return undefined;
if(!guildT.includes(msg.guild.id)) return;
if(!channelT.includes(msg.channel.id)) return;
let user = client.users.get(msg.content.split(" ")[1])
let reason = msg.content.split(" ").slice(2).join(" ");
if(!reason || !user) return msg.channel.send(`**:x: | Error , Please Type Command True Ex : \`${prfs}rcredit [ID] [Reason]\`**`)
let channell = client.channels.get("615820384582893568")
channell.send(`**:white_check_mark: | Done I Have Remove \`${credits[user.id].credits}\` Credit From <@${user.id}>, Reason: \`${reason}\` By: <@${msg.author.id}>**`)
msg.channel.send("**:white_check_mark: | Done.**")
credits[user.id].credits = 0
fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
if(e)throw e;
})
}
})

client.on('message',async message => {
let Fire = message.content.split(" ")[0].substring(prfs.length);
let mention = message.mentions.users.first() || message.author
if(Fire === "cg") {
let args = message.content.split(" ");
if(!devs.includes(message.author.id)) return;
if(!args[1] || isNaN(args[1])) return message.reply("**Type Credit**")
if(!credits[mention.id]) return;
credits[mention.id].credits += (+args[1]);
fs.writeFileSync("./credits.json", JSON.stringify(credits));
console.log(credits[mention.id])
message.reply(`**Give : \`${args[1]}\`**`);
} else if(Fire === "cr") {
let args = message.content.split(" ");
if(!devs.includes(message.author.id)) return;
if(!args[1] || isNaN(args[1])) return message.reply("**Type Credit**")
if(!credits[mention.id]) return;
credits[mention.id].credits += (-args[1]);
fs.writeFileSync("./credits.json", JSON.stringify(credits));
console.log(credits[mention.id])
message.reply(`**Removed : \`${args[1]}\`**`);
}
});
let level = JSON.parse(fs.readFileSync("./level.json", "utf8"));
client.on("message", message => { 
if(message.author.bot) return undefined;
if(!level[message.author.id]) level[message.author.id] = {
xp: 0,
level: 0
}
let username = message.author;
level[message.author.id].xp++;
let userlevel = level[message.author.id];
if(userlevel.xp > Math.floor(Math.random() * 250) + 50) {
userlevel.level++
userlevel.xp = 0
}
fs.writeFileSync("./level.json", JSON.stringify(level), function(s) {
if (s) throw s;
})
});







client.login(process.env.BOT_TOKEN);
