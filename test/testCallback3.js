const cards = require('../cards.json');
const listOfBoardInformation = require('../callback3.js');

listOfBoardInformation('qwsa221', cards, (error, cardData) => {
  if (cardData) console.log(cardData);
  else console.log(error);
});
