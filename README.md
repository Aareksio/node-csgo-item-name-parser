<p align="center">Read item's weapon, skin and wear from item name</p>

```JS
const parseName = require('csgo-item-name-parser');

const itemDetails = parseName('StatTrak™ FAMAS | Macabre (Well-Worn)');
console.log(itemDetails);

/*
  { 
      name: 'StatTrak™ FAMAS | Macabre (Well-Worn)',
      weapon: 'FAMAS',
      skin: 'Macabre',
      wear: 'Well-Worn',
      statTrak: true,
      souvenir: false 
  }
*/
```
