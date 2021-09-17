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
    boards.filter((eachBoard) => {
      if (eachBoard.name == boardName) {
        getInformationOfBoards(eachBoard.id, boards)
          .then((data) => {
            data.filter((listID) => {
              listOfBoardInformation(listID.id, lists)
                .then((data) => {
                  data.forEach((element) => {
                    listOfCardInformation(element.id, cards)
                      .then((data) => {
                        console.log(data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, 2000);
}

module.exports = getThanosAll;