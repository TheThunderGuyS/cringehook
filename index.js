/**Module that post teh funi embed using a Discord.js webhook
 * Additional usage instructions, details and examples are in the module's readme.
 * @param {string} id The ID paramater is a string containing the webhook ID (the set of random numbers in the URL: discord.com/api/webhooks/__*940402354661876488*__/Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7)
 * @param {string} token The Token paramater is a string containing the webhook login Token (the set of random characters at the end of the URL: discord.com/api/webhooks/940402354661876488/__*Xi2auN2s_TRiSJqAUvJ693RMsrD3iANsIgHG8XB8OmvQQxB0mnxKeaERfWhOgMiFvTmy7*__)
 * @throws Will reject the promise on failure, as well as throwing the DiscordAPIError. Common errors are listed in the module's readme.
 * @returns {Promise} Returns a promise.
 */
module.exports.postCringe = async (id, token) => {
    const Discord = require("discord.js");
    const client = new Discord.WebhookClient(id, token); //Create webhook client

    const supposedlyFunny = new Discord.MessageEmbed() //Generate embed that's actually cringe
        .attachFiles(["https://raw.githubusercontent.com/TheThunderGuyS/cringehook/master/cringe/scratch.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/master/cringe/jarate.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/master/cringe/chungus.png", "https://raw.githubusercontent.com/TheThunderGuyS/cringehook/master/cringe/mineblocx.png"]) //Images
        .setTitle("Click here for FREE V-bucks!!!")
        .setColor("#FF69B4") //Pink sidebar
        .setAuthor("Elon Musk", "attachment://scratch.png", "https://www.nissanusa.com/")
        .setDescription("An important message from Mojang Studios")
        .setThumbnail("attachment://jarate.png") //BOMBS AWAY
        .addField("**Discord will post a picture of COVID-19 to TikTok (so covid gets cancer).** \nWe are trying to keep everyone infected by this pandemic. \n*Please __delet Discord__.* \nIf you see someone that's infected, give them a hug.", "Thank you for listening to my nonsense \nSincerely, __john cena gaming__")
        .setImage("attachment://chungus.png") //laugh
        .setFooter("Discord Big Chungus Team | Cringe", "attachment://mineblocx.png");

    await client.send(supposedlyFunny) //Send teh funni
        .catch(err => {throw err; /*Catch and throw any error that occurs*/});
};
