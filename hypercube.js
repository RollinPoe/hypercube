const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    // Our client needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    // var args = message.content.split(' ')[1]
    var messagesContentString = message.content;

    if (messagesContentString.substring(0, 1) == '!') {
        var args = messagesContentString.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ド':
                if(message.author.id !== config.ownerID) break;
                message.channel.send("キ")
                break;
            case 'cujcs':
                message.channel.send("The Canadian Undergraduate Journal of Cognitive Science is a premiere student journal showcasing undergraduate work from students in the cognitive science from across Canada and around the world.\nFind out more at https://cujcs.ca/ or message the project director, Rollin")
                break;
            case 'cs^3': case 'cs3': case 'csss':
                message.channel.send("The Cogntive Science Student Society at SFU is here for all CogSci students, no matter if you're a major, minor, or just taking a class. We organize events like study sessions, pub nights with profs, or just chances to hang out. We can help with questions you have about classes (content or which to take), the program, or Cognitive Science in general. We also represent and advocate for you to groups like the school administration and SFSS. If you want to know more drop by one of out meetings (!meetings) or message one of the executives.")
                break;
            case 'classes':
                message.channel.send("The current COGS classes for Summer 2020 are:\n**COGS100** - Exploring the Mind\n**COGS110** - Learning in Everyday Life\nCheck out their channels. If you're looking for CMPT, LING, PHIL, or PSYC classes specifically, there's more info in their respective class channels.\n\nWant to know about the CogSci program? Try typing !program");
                break;
            case 'program':
                message.channel.send("Cognitive Science is an interdisciplinary study of the mind and its processes. At SFU this is explored at the intersection of Computing Science, Linguistics, Philosophy, and Psychology. Find out more at https://sfu.ca/cognitive-science")
                break;
            case 'execs':
                message.channel.send("The current executives are:\n**Rollin Poe** - Treasurer\n**Clover Kang** - Communication Director\n\nInterested in joining the executive board? Send a message to one of the executives")
                break;
            case 'meetings':
                message.channel.send("Meetings for CS^3 for this term take place here on discord. Date and time TBD. We will send out an announcement requesting agenda items and confirming the time before every general meeting.")
                break;
            case 'hypercube':
                let greetings = ["Hello", "مرحبا (Hello)", "你好 (Hello)", "Saluton (Hello)", "Bonjour (Hello)", "Χαίρετε (Hello)", "हैलो (Hello)", "Ciao (Hello)", "こんにちは (Hello)", "안녕하세요 (Hello)", "Kia ora (Hello)", "Сайн байна уу (Hello)", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ (Hello)" ,"Olá (Hello)", "Привет (Hello)", "Здраво (Hello)", "Hola (Hello)", "Habari (Hello)", "வணக்கம் (Hello)", "สวัสดี (Hello)", "Merhaba (Hello)", "Xin chào (Hello)", "Hello, world", "48656c6c6f (Hello"]
                message.channel.send(greetings[Math.floor(Math.random() * 23)] + "! I'm HyperCube, the client for the Cognitive Science Student Society discord. You can check out my commands with !commands or !help. I'm maintained by Rollin, so send him a mesage if you find a bug or have a suggestion.")
                break;
            case 'commands': case 'help':
                message.channel.send("**!CS^3/CS3/CSSS** - About the Cognitive Science Student Society\n**!classes** - About the classes for the current semester\**!program** - About the Cognitive Science program\n**!CUJCS** - About CUJCS\n**!execs** - About the executives of CS^3\n**!meetings** - About CS^3 meetings\n**!help/commands** - About the commands you can call\n**!HyperCube** - About me! The HyperCube client! ɔ-【°ッ°】-c")
                break;
            // case 'embed':
            //     message.channel.send({embed: {
            //         color: 0xf8a861,
            //         description: "**!CS^3/CS3/CSSS** - About the Cognitive Science Student Society\n**!classes** - About the classes for the current semester\**!program** - About the Cognitive Science program\n**!CUJCS** - About CUJCS\n**!execs** - About the executives of CS^3\n**!meetings** - About CS^3 meetings\n**!HyperCube** - About me! The HyperCube client! ɔ-【°ッ°】-c"
            //         }
            //     });
            //     break;

            default:
                message.channel.send("๑•́ㅿ•̀๑) ᔆᵒʳʳᵞ I didn't recognize that command. Try !commands for a list of commands.\nIs there a bug? Message my creator, Rollin")
                break;
            // Just add any case commands if you want to..
         }
     }
});

client.on('guildMemberAdd', member => {
    member.send("Welcome to the SFU Cognitive Science Student Society discord! Glad to have you here!\nWe're a group of students from not just the Cognitive Science program, but also all the sub-disciplines, and any related fields.\n\nIf you need something, I may be able to help. Chack out my commands with !help. Or you can ping one of the executives.\n\nWe have both general and academic channels, so have a look around and feel free to introduce yourself to everyone!")
      .catch(console.error);
  });


// Adapted from https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/ and https://anidiots.guide/first-bot/your-first-bot and a bit from https://stackoverflow.com/questions/57185028/what-is-the-function-of-createdm-method-for-user