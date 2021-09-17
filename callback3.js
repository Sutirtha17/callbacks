/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

function listOfCardInformation(boardID, listOfCard) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cardData = listOfCard[boardID];

      if (cardData) {
        resolve(cardData);
      } else {
        let error = new Error('Invalid ID or Json files!');
        reject(error);
      }
    }, 2000);
  });
}

module.exports = listOfCardInformation;
