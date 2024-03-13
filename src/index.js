const { token } = require('../config.json'); // Экспортируем токен из файла config.json
const { Client, IntentsBitField } = require('discord.js'); 
const compare = require('../utilities/compare.js');

const client = new Client({ // Выдаем боту права, подробнее: https://discord.com/developers/docs/topics/gateway#list-of-intents
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	]
});

client.on('ready', (c) => {
	console.log(`✅Бот ${c.user.username} запустился и готов к работе✅`)
});

client.on('messageCreate', (message) => {
	if(message.author.bot) {
		return;
	}

	if (message.content === 'ку') {
		message.reply('ку');
	}
})

client.on('interactionCreate', (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'check-build') {
		const tournament = interaction.options.get('tournament');
		const killer = interaction.options.get('killer');
		const perk1 = interaction.options.get('perk-1');
		const perk2 = interaction.options.get('perk-2');
		const perk3 = interaction.options.get('perk-3');
		const perk4 = interaction.options.get('perk-4');
		const offering = interaction.options.get('offering');
		const item = interaction.options.get('item');
		const addonsRarity = interaction.options.get('addons-rarity');
		interaction.reply(compare(tournament, killer, perk1, perk2, perk3, perk4, offering, item, addonsRarity));
	}

	if (interaction.commandName === 'test-input') {
		const test1 = interaction.options.get('test-unput1');
		const test2 = interaction.options.get('test-unput2');
		const test3 = interaction.options.get('test-unput3');
		console.log(test1.value,test2,test3);
	}
});

client.login(token);
