/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/

function listOfCardInformation(boardID, listOfCard, cb) {
  setTimeout(() => {
    let cardData;
    try {
      cardData = listOfCard[boardID];
    } catch {
      cb(new Error('Invalid json format, please give correct dataset', null));
    }
    cb(null, cardData);
  }, 2000);
}

module.exports = listOfCardInformation;
