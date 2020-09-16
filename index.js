/**Module that post teh funi embed using a Discord.js webhook
 * Additional usage instructions, details and examples are in the {@link https://github.com/TheThunderGuyS/cringehook/blob/1.1.2/README.md module's readme}.
 * @param {string} id "id" is your Webhook ID.
 * @param {string} token "token" is your Webhook Token.
 * @throws {DiscordAPIError} Throws a DiscordAPIError.
 * @returns {Promise} Returns a promise.
 * @async This module is asynchronous.
 */
module.exports.postCringe = async (id, token) => {
    const Discord = require("discord.js");
    const client = new Discord.WebhookClient(id, token); //Create webhook client

    const supposedlyFunny = new Discord.MessageEmbed() //Generate embed that's actually cringe
        .attachFiles(["https://raw.githubusercontent.com/TheThunderGuyS/cringehook/1.1.2/img/scratch.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/1.1.2/img/jarate.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/1.1.2/img/chungus.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/1.1.2/img/mineblocx.png"]) //Images
        .setTitle("Click here for FREE V-bucks!!!") //yes
        .setColor("#FF69B4") //Pink sidebar
        .setAuthor("Elon Musk", "attachment://scratch.png", "https://www.nissanusa.com/") //elon invented scratch ans nissan murano
        .setDescription("An important message from Mojang Studios")
        .setThumbnail("attachment://jarate.png") //BOMBS AWAY
        .addField("bgi cuhngus", "**Discord will post a picture of COVID-19 to TikTok (so covid gets cancer).** \nWe are trying to keep everyone infected by this pandemic. \n*Please __delet Discord__.* \nIf you see someone that's infected, give them a hug. \n**Thank you for listening to my nonsense** \nSincerely, __john cena gaming__")
        .setImage("attachment://chungus.png") //laugh
        .setFooter("Discord Big Chungus Team | Cringe", "attachment://mineblocx.png"); //idk what this is

    await client.send(supposedlyFunny) //Send teh funni
        .catch(err => {throw err; /*Catch and throw any error that occurs*/});
};
