const cards = require('../cards.json');
const listOfBoardInformation = require('../callback3.js');

listOfBoardInformation('qwsa221', cards)
  .then((cardData) => {
    console.log(cardData);
  })
  .catch((error) => {
    console.log(error);
  });
