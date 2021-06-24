const parseName = require('./index');
const test = require('ava');

test('1 part name', t => {
  const itemData = parseName('★ Gut Knife');
  t.is(itemData.weapon, '★ Gut Knife');
});

test('2 part name', t => {
  const itemData = parseName('Galil AR | VariCamo (Field-Tested)');
  t.is(itemData.weapon, 'Galil AR');
  t.is(itemData.skin, 'VariCamo');
  t.is(itemData.wear, 'Field-Tested');
  t.falsy(itemData.statTrak);
  t.falsy(itemData.souvenir);
});

test('3 part name', t => {
  const itemData = parseName('Sticker | apEX (Gold) | Krakow 2017');
  t.is(itemData.weapon, 'Sticker');
  t.is(itemData.skin, 'apEX (Gold) | Krakow 2017');
});

test('Non english name', t => {
  const itemData = parseName('M4A4 | 龍王 (Dragon King) (Well-Worn)');
  t.is(itemData.weapon, 'M4A4');
  t.is(itemData.skin, '龍王 (Dragon King)');
  t.is(itemData.wear, 'Well-Worn');
});

test('Case Key', t => {
  const itemData = parseName('Operation Breakout Case Key');
  t.is(itemData.weapon, 'Case Key');
  t.is(itemData.skin, 'Operation Breakout');
});

test('Case', t => {
  const itemData = parseName('Chroma 2 Case');
  t.is(itemData.weapon, 'Case');
  t.is(itemData.skin, 'Chroma 2');
});

test('Souvenir Package', t => {
  const itemData = parseName('ESL One Katowice 2015 Dust II Souvenir Package');
  t.is(itemData.weapon, 'Souvenir Package');
  t.is(itemData.skin, 'ESL One Katowice 2015 Dust II');
});

test('StatTrak', t => {
  const itemData = parseName('StatTrak™ FAMAS | Macabre (Well-Worn)');
  t.is(itemData.weapon, 'FAMAS');
  t.true(itemData.statTrak);
});

test('Souvenir', t => {
  const itemData = parseName('Souvenir PP-Bizon | Urban Dashed (Field-Tested)');
  t.is(itemData.weapon, 'PP-Bizon');
  t.true(itemData.souvenir);
});

test('No wear', t => {
  const itemData = parseName('Item | Skin');
  t.is(itemData.weapon, 'Item');
  t.is(itemData.skin, 'Skin');
});

test('Graffiti', t => {
  const itemData = parseName('Sealed Graffiti | Little Bock (Battle Green)');
  t.is(itemData.weapon, 'Sealed Graffiti');
  t.is(itemData.skin, 'Little Bock (Battle Green)');
})

test('Graffiti 3 part', t => {
  const itemData = parseName('Sealed Graffiti | Virtus.Pro | London 2018');
  t.is(itemData.weapon, 'Sealed Graffiti')
  t.is(itemData.skin, 'Virtus.Pro | London 2018')
})
