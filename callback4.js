/* 
	Problem 4: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from
the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/
const getInformationOfBoards = require('./callback1');
const listOfBoardInformation = require('./callback2');
const listOfCardInformation = require('./callback3');

function getThanosAndMind(boards, lists, cards, boardName, listName) {
  setTimeout(() => {
    try {
      if (boards.length == 0) boards = {};
      boards.filter((eachBoard) => {
        let thanosData = [];
        if (eachBoard.name == boardName) {
          thanosData.push(eachBoard);
          getInformationOfBoards(eachBoard.id, boards, (error, data) => {
            if (data) {
              data.filter((listID) => {
                listOfBoardInformation(listID.id, lists, (error, data) => {
                  if (data) {
                    data.filter((cardID) => {
                      if (cardID.name == listName) {
                        listOfCardInformation(
                          cardID.id,
                          cards,
                          (error, data) => {
                            if (data) {
                              console.log(data);
                            } else {
                              console.log(error);
                            }
                          }
                        );
                      }
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
  }, 2000);
}

module.exports = getThanosAndMind;
