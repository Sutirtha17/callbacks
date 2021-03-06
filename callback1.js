/*Each function that you write must take at least 2s to execute using the setTimeout function like so:

	function() {
		setTimeout(() => {
			// Your code here
		}, 2 * 1000);
	}
*/

/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/

const getInformationOfBoards = (boardId, boards, cb) => {
  setTimeout(() => {
    let boardData = boards.filter((board) => board.id == boardId);

    if (boardData) {
      cb(null, boardData);
    } else {
      let error = new Error('Invalid ID or Json file!');
      cb(error);
    }
  }, 2 * 1000);
};

module.exports = getInformationOfBoards;
