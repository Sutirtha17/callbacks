/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/

function listOfBoardInformation(boardID, listOfBoard, cb) {
  setTimeout(() => {
    let listData;
    try {
      listData = listOfBoard[boardID];
    } catch {
      cb(new Error('Invalid json format, please give correct dataset'), null);
    }
    cb(null, listData);
  }, 2000);
}

module.exports = listOfBoardInformation;
