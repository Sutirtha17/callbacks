/* 
	Problem 6: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/
const getInformationOfBoards = require('./callback1');
const listOfBoardInformation = require('./callback2');
const listOfCardInformation = require('./callback3');

function getThanosAll(boards, lists, cards, boardName) {
  setTimeout(() => {
    try {
      boards.filter((eachBoard) => {
        let thanosData = [];
        if (eachBoard.name == boardName) {
          thanosData.push(eachBoard);
          getInformationOfBoards(eachBoard.id, boards, (error, data) => {
            if (data) {
              data.filter((listID) => {
                listOfBoardInformation(listID.id, lists, (error, data) => {
                  if (data) {
                    data.forEach((element) => {
                      listOfCardInformation(
                        element.id,
                        cards,
                        (error, data) => {
                          if (data) console.log(data);
                          else console.log(error);
                        }
                      );
                    });
                  } else {
                    console.log(error);
                  }
                });
              });
            } else {
              console.log(error);
            }
          });
        }
      });
    } catch {
      throw new Error('Invalid json format, please give correct datasets');
    }
  }, 2 * 1000);
}

module.exports = getThanosAll;
