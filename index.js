const replaceRegex = new RegExp('(?:Case Key|Case|Souvenir Package)$');
const graffitiRegex = new RegExp('^(Sealed Graffiti)')

function parseName(name) {
  const itemData = {
    name,
    weapon: null,
    skin: null,
    wear: null,
    statTrak: false,
    souvenir: false
  };

  name.replace(replaceRegex, (match, index, name) => {
    itemData.weapon = match;
    itemData.skin = `${name.slice(0, index - 1)}${name.slice(index + name.length)}`;
  });

  name.replace(graffitiRegex, match => {
    itemData.weapon = match;
    itemData.skin = name.slice(match.length + 3);
  })

  if (itemData.skin) return itemData;

  const stattrakIndex = name.indexOf('StatTrak');
  if (stattrakIndex !== -1) {
    name = `${name.slice(0, stattrakIndex)}${name.slice(stattrakIndex + 10)}`;
    itemData.statTrak = true;
  }

  const souvenirIndex = name.indexOf('Souvenir');
  if (souvenirIndex !== -1) {
    name = `${name.slice(0, souvenirIndex)}${name.slice(souvenirIndex + 9)}`;
    itemData.souvenir = true;
  }

  const nameParts = name.split(' | ');
  switch (nameParts.length) {
    case 3:
      itemData.weapon = nameParts[0];
      itemData.skin = `${nameParts[1]} | ${nameParts[2]}`;
      break;
    case 2:
      itemData.weapon = nameParts[0];

      const wearStart = nameParts[1].lastIndexOf('(');
      const wearEnd = nameParts[1].lastIndexOf(')');

      if (wearStart !== -1 && wearEnd !== -1) {
        itemData.skin = `${nameParts[1].slice(0, wearStart - 1)}${nameParts[1].slice(wearEnd + 1)}`;
        itemData.wear = nameParts[1].slice(wearStart + 1, wearEnd);
      } else {
        itemData.skin = nameParts[1];
      }
      break;
    default:
      itemData.weapon = nameParts[0];
      break;
  }

  return itemData;
}

module.exports = parseName;
