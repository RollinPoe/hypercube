require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require("./config.json");

// client.login(config.token);
client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
    // Our client needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
    // var args = message.content.split(' ')[1]
    var messagesContentString = message.content;

    if (messagesContentString.substring(0, 1) == '!') {
        var args = messagesContentString.substring(1).split(' ');
        var cmd = args[0].toLowerCase();
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ド':
                if(message.author.id !== process.env.OWNER_ID) break;
                message.channel.send("キ")
                break;
            case 'cujcs':
                message.channel.send("The Canadian Undergraduate Journal of Cognitive Science is a premiere student journal showcasing undergraduate work from students in the cognitive science from across Canada and around the world. We have finished the final round of reviews and are moving towards publication.\nFind out more at <https://cujcs.ca> or message the project director, Rollin")
                break;
            case 'cs^3': case 'cs3': case 'csss':
                message.channel.send("The Cogntive Science Student Society at SFU is here for all CogSci students, no matter if you're a major, minor, or just taking a class. We organize events like study sessions, pub nights with profs, or just chances to hang out. We can help with questions you have about classes (content or which to take), the program, or Cognitive Science in general. We also represent and advocate for you to groups like the school administration and SFSS. If you want to know more drop by one of out meetings (!meeting) or message one of the executives.")
                break;
            case 'classes': case 'class':
                message.channel.send("The current COGS classes for Summer 2020 are:\n**COGS100** - Exploring the Mind\n**COGS110** - Learning in Everyday Life\nCheck out their channels. If you're looking for CMPT, LING, PHIL, or PSYC classes specifically, there's more info in their respective class channels. Try !cogs100, !cogs310, etc. to learn more about a specific COGS course.\n\nWant to know about the CogSci program? Try typing !program");
                break;
            case 'cogs100':
                message.channel.send("**Exploring the Mind**\nThis course provides a basic integrative overview of how cognitive science aspires to integrate the empirical findings, theories, and methods of psychology, neuroscience, linguistics, computing science and philosophy. Offered most semesters.\n<https://www.sfu.ca/students/calendar/2020/spring/courses/cogs/100>");
                break;
            case 'cogs110':
                message.channel.send("**Learning in Everyday Life: The Art and Science of Hacking your Brain**\nAn introduction to learning and decision-making in everyday life. Projects in this course piggyback on each student's other coursework or outside interests and so are directly relevant to their personal circumstances. This course gives students the knowledge necessary to make any learning situation easier and more fun. Offered most semesters.\n<https://www.sfu.ca/students/calendar/2020/spring/courses/cogs/110>");
                break;
            case 'cogs200':
                message.channel.send("**Foundations in Cognitive Science**\nAn introduction to major empirical methods and theoretical frameworks for exploring the mind that examines some of the foundational debates that have fueled investigations over the past fifty years. Taking an interdisciplinary approach, the course illustrates how a convergence of ideas from psychology, philosophy, linguistics, and computer science has led to deep explanations of a range of cognitive science topics.Only offered in Spring.\n<https://www.sfu.ca/students/calendar/2020/spring/courses/cogs/200>");
                break;
            case 'cogs300':
                message.channel.send("**Selected Topics in Cognitive Science**\nAn interdisciplinary exploration of recent work on some special topic in cognitive science (such as vision, reasoning, connectionism, etc.).Only offered in Spring.\n<https://www.sfu.ca/students/calendar/2020/fall/courses/cogs/300>");
                break;
            case 'cogs310':
                message.channel.send("**Consciousness**\nExplores the topic of consciousness, often called 'the last great mystery of science,' focusing on current scientific theories and empirical investigations from philosophy, psychology, and neuroscience.Only offered in Fall.\n<https://www.sfu.ca/students/calendar/2019/fall/courses/cogs/310>");
                break;
            case 'program':
                message.channel.send("Cognitive Science is an interdisciplinary study of the mind and its processes. At SFU this is explored at the intersection of Computing Science, Linguistics, Philosophy, and Psychology. Find out more at <https://sfu.ca/cognitive-science>")
                break;
            case 'execs':
                message.channel.send("The current executives are:\n**Rollin Poe** - President\n**Clover Kang** - Communication Director\n\nInterested in joining the executive board? Send a message to one of the executives")
                break;
            case 'meetings':
            case 'meeting':
                message.channel.send("Meetings for CS^3 for this term take place here on discord. Our next meeting is **Friday, July 3 at 15:30**. If you have items you would like added to the agenda, message an executive. Everyone is welcome to drop by.")
                break;
            case 'hypercube':
                let greetings = ["你好 (Hello)", "Saluton (Hello)", "Bonjour (Hello)", "Χαίρετε (Hello)", "हैलो (Hello)", "Ciao (Hello)", "こんにちは (Hello)", "안녕하세요 (Hello)", "Kia ora (Hello)", "Сайн байна уу (Hello)", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ (Hello)" ,"Olá (Hello)", "Привет (Hello)", "Здраво (Hello)", "Hola (Hello)", "Habari (Hello)", "வணக்கம் (Hello)", "สวัสดี (Hello)", "Merhaba (Hello)", "Xin chào (Hello)", "Hello, world", "48656c6c6f (Hello)"]
                message.channel.send(greetings[Math.floor(Math.random() * 22)] + "! I'm HyperCube, the bot for the Cognitive Science Student Society discord. You can check out my commands with !commands or !help. I'm maintained by Rollin, so send him a mesage if you find a bug or have a suggestion.")
                break;
            case 'commands': case 'help':
                message.channel.send("**!CS^3/CS3/CSSS** - About the Cognitive Science Student Society\n**!classes** - About the classes for the current semester. Also try !cogs100, !cogs310, etc.\n**!program** - About the Cognitive Science program\n**!CUJCS** - About CUJCS\n**!execs** - About the executives of CS^3\n**!meeting** - About CS^3 meetings\n**!help/commands** - About the commands you can call\n**!HyperCube** - About me! The HyperCube bot! ɔ-【°ッ°】-c")
                break;
            case 'embed':
                if(message.author.id !== process.env.OWNER_ID) break;
                message.channel.send({embed: {
                    color: 0xf8a861,
                    description: "**!CS^3/CS3/CSSS** - About the Cognitive Science Student Society\n**!classes** - About the classes for the current semester\**!program** - About the Cognitive Science program\n**!CUJCS** - About CUJCS\n**!execs** - About the executives of CS^3\n**!meeting** - About CS^3 meetings\n**!HyperCube** - About me! The HyperCube bot! ɔ-【°ッ°】-c"
                    }
                });
                break;
            case 'reply':
                if(message.author.id !== process.env.OWNER_ID) break;
                message.reply(" replying directly")
                break;            
            case 'pm':
                if (message.author.id !== process.env.OWNER_ID) break;
                message.author.send("PM")
                break;
            case 'hello':
                // if (message.author.id !== process.env.OWNER_ID) break;
                if(message.member.roles.cache.some(role => role.name === "Executive")){
                    message.channel.send("@everyone\n╰[･ิД･ิ] Hello! I'm HyperCube, a bot here to help out on the CS^3 discord channel. You can ask me questions about classes (!classes), about the student union (!cs^3), and a lot more (!commands).\nI am written and maintained by Rollin, so let him know if you have any questions or bug reports.")
                }
                else{
                    message.channel.send("Sorry, you can't access that command.")
                }
                break;
            case 'execpriv':
                if (message.member.roles.cache.some(role => role.name === "executive")){
                    message.channel.send("", {files:["images/execPriv.gif"]})
                }
                else{
                    message.channel.send("You're not an executive. So you don't have the privileges ¯\\\_(ツ)_/¯.")
                }
                break;
            default:
                message.channel.send("๑•́ㅿ•̀๑) ᔆᵒʳʳᵞ I didn't recognize that command. Try !commands for a list of commands.\nIs there a bug? Message my creator, Rollin")
                break;
            // Just add any case commands if you want to..
         }
     }
});

client.on('guildMemberAdd', member => {
    member.send("Welcome to the SFU Cognitive Science Student Society discord! Glad to have you here!\nWe're a group of students from not just the Cognitive Science program, but also all the sub-disciplines, and any related fields.\n\nIf you need something, I may be able to help. Chack out my commands with !help. Or you can ping one of the executives.\n\nWe have both general and academic channels, so have a look around and feel free to introduce yourself to everyone! Also make sure to have a gnader at the #rules before diving in.")
      .catch(console.error);
  });

//Version: 1.2

// Adapted from https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/, https://anidiots.guide/first-bot/your-first-bot, and https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b and a bit from https://stackoverflow.com/questions/57185028/what-is-the-function-of-createdm-method-for-user