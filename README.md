# Discord Бот для сравнения билдов в игре Dead by Daylight

![Dead by Daylight](https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg)

Добро пожаловать в Discord Бот для сравнения билдов в игре Dead by Daylight! Этот бот помогает игрокам сравнивать билды в игре Dead by Daylight с балансом различных турниров.

## Особенности

- **Команда /check-build**: Основная команда бота. Позволяет пользователям сравнивать билды с балансом турниров.
  - **Аргументы**:
    - `tournament`: Укажите турнир, с балансом которого нужно сравнить билд.
    - `killer`: Убийца, связанный с билдом.
    - `perk-1`, `perk-2`, `perk-3`, `perk-4`: Навыки, выбранные для билда.
    - `offering` (необязательно): Любое предложение, использованное в билде.
    - `item` (необязательно): Предмет, несомый выжившим или убийцей.
    - `addons-rarity` (необязательно): Редкость аддонов, используемых с предметом.

## Примеры Использования

```plaintext
/check-build tournament=XYZ killer=Trapper perk-1=Brutal_Strength perk-2=Agitation perk-3=Iron_Grasp perk-4=Monitor_%26_Abuse offering=Burnt_Scent_item=Sabotage addons-rarity=Common
