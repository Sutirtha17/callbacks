/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

function listOfBoardInformation(boardID, listOfBoard, cb) {
  setTimeout(() => {
    let listData = listOfBoard[boardID];

    if (listData) {
      cb(null, listData);
    } else {
      let error = new Error('Invalid ID or Json files!');
      cb(error);
    }
  }, 2 * 1000);
}

module.exports = listOfBoardInformation;
