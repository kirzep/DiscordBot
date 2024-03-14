const tournamentsList = require('../data/tournaments.json');
const killerList = require('../data/killers-names.json');
const perkList = require('../data/all-perks.json');
const offeringsList = require('../data/offerings-list.json');
const itemsList = require('../data/items-list.json');
const addonsRarityList = require('../data/addons-rarity-list.json');
const balance = require('../data/balance_data/balance.json');

/*const tournament = "dbdleague";
const killer = 'Cenobite';
const perk1 = 'Iron Will';
const perk2 = 'Lucky Break';
const perk3 = 'Head on';
const perk4 = 'Quick & Quiet';
const offering = "vigo's shroud";
const item = 'flashlight_green';
const addonsRarity = 'rarity_uncommon';*/

const formate = (string) => string.toLowerCase().replace(/[^a-z&]/g, ''); // Функция для форматирования строки


/*const formate = (string) => {
  if (string !== null && string !== undefined) {
    return string.toLowerCase().replace(/[^a-z&]/g, '');
  }
  return 'null';
};*/


const formateArray = (array) => array.map(element => element.toLowerCase().replace(/[^a-z&]/g, '')); // Функция форматирования массива


/*const formateArray = (array) => {
  if (array !== null && array !== undefined) {
    return array.map(element => element.toLowerCase().replace(/[^a-z&]/g, ''));
  }
  return 'null';
};*/




const compare = (tournament, killer, perk1, perk2, perk3, perk4, offering, item, addonsRarity) => {
  // Форматируем входные данные
  const formatedTournamentInput = formate(tournament.value);
  const formatedKillerInput = formate(killer.value);
  const formatedPerk1Input = formate(perk1.value);
  const formatedPerk2Input = formate(perk2.value);
  const formatedPerk3Input = formate(perk3.value);
  const formatedPerk4Input = formate(perk4.value);
  // Проверяем существования подношения
  let formatedOfferingInput;
  if (offering !== null) {
    formatedOfferingInput = formate(offering.value);
  } else {
    formatedOfferingInput = 'null';
  }
  // Проверяем существования предмета
  let formatedItemInput;
  if (item !== null) {
    formatedItemInput = formate(item.value);
  } else {
    formatedItemInput = 'null';
  }
  // Проверяем существования аддонов
  let formatedaddonsRarityInput;
  if (addonsRarity !== null) {
    formatedaddonsRarityInput = formate(addonsRarity.value);
  } else {
    formatedaddonsRarityInput = 'null';
  }

  // Форматируем массивы с данными
  const formatedTournament = formateArray(tournamentsList.names);
  const formatedKillers = formateArray(killerList.names);
  const formatedPerks = formateArray(perkList.perks);
  const formatedOfferings = formateArray(offeringsList.names);
  const formatedItems = formateArray(itemsList.names);
  const formatedaddonsRarity = formateArray(addonsRarityList.names);

  // Основная логика
  //Добавляем константы для проверки принадлежания входных данных, данным в data
  const tournamentValid = formatedTournament.includes(formatedTournamentInput);
  const killersValid = formatedKillers.includes(formatedKillerInput);
  const perksValid = formatedPerks.includes(formatedPerk1Input) && formatedPerks.includes(formatedPerk2Input) && formatedPerks.includes(formatedPerk3Input) && formatedPerks.includes(formatedPerk4Input);
  const offeringsValid = formatedOfferings.includes(formatedOfferingInput);
  const itemsValid = formatedItems.includes(formatedItemInput);
  const addonsRarityValid = formatedaddonsRarity.includes(formatedaddonsRarityInput);
  // Проверка на существование вводимых данных
  let result = '';
  if (!tournamentValid || !killersValid || !perksValid || !offeringsValid || !itemsValid || !addonsRarityValid) {
    result = "💀 Вы словили ошибку 💀";
  }
  if (result.length !== 0) { 
    if (!tournamentValid) {
      result = `${result}\n\nНекорректно введено название турнира`
    }
    if (!killersValid) {
      result = `${result}\n\nНекорректно введено имя киллера`
    }
    if (!formatedPerks.includes(formatedPerk1Input)) {
      result = `${result}\n\nНекорректно введено название 1 перка: ${perk1.value}`
    }
    if (!formatedPerks.includes(formatedPerk2Input)) {
      result = `${result}\n\nНекорректно введено название 2 перка: ${perk2.value}`
    }
    if (!formatedPerks.includes(formatedPerk3Input)) {
      result = `${result}\n\nНекорректно введено название 3 перка: ${perk3.value}`
    }
    if (!formatedPerks.includes(formatedPerk4Input)) {
      result = `${result}\n\nНекорректно введено название 4 перка: ${perk4.value}`
    }
    if (!offeringsValid) {
      result = `${result}\n\nНекорректно введено название подношения`
    }
    if (!itemsValid) {
      result = `${result}\n\nНекорректно введено название предмета`
    }
    if (!addonsRarityValid) {
      result = `${result}\n\nНекорректно введена редкость аддонов`
    }
    return result;
  } 
  const killerTier = balance[formatedTournamentInput][formatedKillerInput]['tier'];
  const formatedGeneralBalance = formateArray(balance[formatedTournamentInput]['general-balance']);
  const formatedTierBalance = formateArray(balance[formatedTournamentInput][killerTier]);
  const formatedOfferingBalance = formateArray(balance[formatedTournamentInput][formatedKillerInput]['offerings']);
  const formatedItemBalance = formateArray(balance[formatedTournamentInput][formatedKillerInput]['items']);
  let formatedaddonsRarityBalance;
  if (balance[formatedTournamentInput][formatedKillerInput]['addons'][formatedItemInput] !== undefined) {
  formatedaddonsRarityBalance = formateArray(balance[formatedTournamentInput][formatedKillerInput]['addons'][formatedItemInput])
  } else {
    formatedaddonsRarityBalance = 'null';
  }
  const formatedKillerBans = formateArray(balance[formatedTournamentInput][formatedKillerInput]['perks'])
  if (formatedGeneralBalance.includes(formatedPerk1Input || formatedPerk2Input || formatedPerk3Input || formatedPerk4Input) || formatedTierBalance.includes(formatedPerk1Input || formatedPerk2Input || formatedPerk3Input || formatedPerk4Input) || !formatedOfferingBalance.includes(formatedOfferingInput) || !formatedItemBalance.includes(formatedItemInput) || !formatedaddonsRarity.includes(formatedaddonsRarityInput) || formatedKillerBans.includes(formatedPerk1Input || formatedPerk2Input || formatedPerk3Input || formatedPerk4Input)) {
    result = '❌ В ВАШЕМ БИЛДЕ ЕСТЬ ОШИБКИ ❌'
    if (formatedKillerBans.includes(formatedPerk1Input)) {
      result = `${result}\n\n🔶${perk1.value} забанен для этого киллера`;
    }
    if (formatedKillerBans.includes(formatedPerk2Input)) {
      result = `${result}\n\n🔶${perk2.value} забанен для этого киллера`;
    }
    if (formatedKillerBans.includes(formatedPerk3Input)) {
      result = `${result}\n\n🔶${perk3.value} забанен для этого киллера`;
    }
    if (formatedKillerBans.includes(formatedPerk4Input)) {
      result = `${result}\n\n🔶${perk4.value} забанен для этого киллера`;
    }
    if (formatedGeneralBalance.includes(formatedPerk1Input)) {
      result = `${result}\n\n🔶${perk1.value} забанен по генералке`;
    }
    if (formatedGeneralBalance.includes(formatedPerk2Input)) {
      result = `${result}\n\n🔶${perk2.value} забанен по генералке`;
    }
    if (formatedGeneralBalance.includes(formatedPerk3Input)) {
      result = `${result}\n\n🔶${perk3.value} забанен по генералке`;
    }
    if (formatedGeneralBalance.includes(formatedPerk4Input)) {
      result = `${result}\n\n🔶${perk4.value} забанен по генералке`;
    }
    if (formatedTierBalance.includes(formatedPerk1Input)) {
      result = `${result}\n\n🔶${perk1.value} забанен по ${killerTier[5]} тиру`;
    }
    if (formatedTierBalance.includes(formatedPerk2Input)) {
      result = `${result}\n\n🔶${perk2.value} забанен по ${killerTier[5]} тиру`;
    }
    if (formatedTierBalance.includes(formatedPerk3Input)) {
      result = `${result}\n\n🔶${perk3.value} забанен по ${killerTier[5]} тиру`;
    }
    if (formatedTierBalance.includes(formatedPerk4Input)) {
      result = `${result}\n\n🔶${perk4.value} забанен по ${killerTier[5]} тиру`;
    }
    if (!formatedOfferingBalance.includes(formatedOfferingInput)) {
      result = `${result}\n\n🔮${offering.value} не находится в списке разрешенных подношений`;
    }
    if (!formatedItemBalance.includes(formatedItemInput)) {
      switch (item.value) {
        case 'firecracker':
          item.value = 'Хлопушка'
          break;
        case 'flashlight_yellow':
        item.value = '🔦Жёлтый фонарь'
        break;
        case 'flashlight_green':
        item.value = '🔦Зелёный фонарь'
        break;
        case 'flashlight_purple':
        item.value = '🔦Фиолетовый фонарь'
        break;
        case 'medkit_gray':
        item.value = '🚑Серая аптечка'
        break;
        case 'medkit_yellow':
        item.value = '🚑Жёлтая аптечка'
        break;
        case 'medkit_purple':
        item.value = '🚑Фиолетовая аптечка'
        break;
        case 'toolbox_gray':
        item.value = '🧰Серый тулбокс'
        break;
        case 'toolbox_yellow':
        item.value = '🧰Жёлтый тулбокс'
        break;
        case 'toolbox_green32':
        item.value = '🧰Вместительный ящик с инструментами (32 заряда)'
        break;
        case 'toolbox_green16':
        item.value = '🧰Инструменты механика (32 зарядов)'
        break;
        case 'toolbox_purple24':
        item.value = '🧰Инструменты Алекса (24 заряда)'
        break;
        case 'toolbox_purple16':
        item.value = '🧰Инструменты инженера (16 зарядов)'
        break;
      }
      result = `${result}\n\n${item.value} не находится в списке разрешенных предметов`;
    }
    if (!formatedaddonsRarityBalance.includes(formatedaddonsRarityInput)) {
      switch (addonsRarity.value) {
        case 'rarity_common':
          addonsRarity.value = '🟤Коричневые';
          break;
        case 'rarity_uncommon':
            addonsRarity.value = '🟡Жёлтые';
            break; 
        case 'rarity_rare':
            addonsRarity.value = '🟢Зелёные';
            break; 
        case 'rarity_veryrare':
            addonsRarity.value = '🟣Фиолетовые';
            break;   
        case 'rarity_ultrarare':
            addonsRarity.value = '🔴Розовые';
            break;         
      }
      result = `${result}\n\n${addonsRarity.value} аддоны запрещены`;
    }
    return result;
  } return '✅Билд полность прошел проверку✅';
  };

  module.exports = compare;