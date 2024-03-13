const { GUILD_ID , CLIENT_ID, token } = require('../config.json');
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
const tournaments = require('../bot_data/tournament-names.json');
const items = require('../bot_data/items-names.json');
const offerings = require('../bot_data/offerings-names.json');
const rarity = require('../bot_data/rarity-list.json');

const commands = [
  {
    name: 'check-build',
    description: 'Проверяет ваш билд на соответствие балансу выбранного турнира',
    options: [
      // Первая опция (Выбор турнира)
      {
        name: 'tournament',
        description: 'Выберите название турнира',
        type: ApplicationCommandOptionType.String,
        choices: tournaments.names,
        required: true,
      },
      // Вторая опция (Выбор киллера)
      {
        name: 'killer',
        description: 'Выберите киллера',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      // Третья опция (Первый перк)
      {
        name: 'perk-1',
        description: 'Выберите первый перк',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: true,
      },
      // Четвертая опция (Второй перк)
      {
        name: 'perk-2',
        description: 'Выберите второй перк',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: true,
      },
      // Пятая опция (3 перк)
      {
        name: 'perk-3',
        description: 'Выберите третий перк',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: true,
      },
      // Шестая опция (4 перк)
      {
        name: 'perk-4',
        description: 'Выберите четвертый перк',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: true,
      },
      // Седьмая опция (Подношение)
      {
        name: 'offering',
        description: 'Выберите подношение',
        type: ApplicationCommandOptionType.String,
        choices: offerings.names,
        required: false,
      },
      // Восьмая опция (Предмет)
      {
        name: 'item',
        description: 'Выберите предмет',
        type: ApplicationCommandOptionType.String,
        choices: items.names,
        required: false,
      },
      // Девятая опция (редкость аддонов)
      {
        name: 'addons-rarity',
        description: 'Выберите редкость(качество) аддонов',
        type: ApplicationCommandOptionType.String,
        choices: rarity.names,
        required: false,
      },
    ],
  },
  {
    name: 'test-input',
    description: 'Тестовая команда для разработчика',
    options: [
      {
        name: 'test-unput1',
        description: 'test-unput1',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: false,
      },
      {
        name: 'test-unput2',
        description: 'test-unput2',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: false,
      },
      {
        name: 'test-unput3',
        description: 'test-unput3',
        type: ApplicationCommandOptionType.String,
        choices: [],
        required: false,
      },
    ],
  },
];

const rest = new REST({version: '10'}).setToken(token);

(async () => {
  try {
    console.log('Регистрация Slash команд...');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    )

    console.log('Слеш команды зарегестрированы');
  } catch (error) {
    console.log(`Ошибка: ${error}`);
  }
})();