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
    let promiseArray = [];

    boards.filter((eachBoard) => {
      if (eachBoard.name == boardName) {
        promiseArray.push(getInformationOfBoards(eachBoard.id, boards));
      }
    });

    Promise.all(promiseArray)
      .then((data) => {
        promiseArray = [];

        data.filter((listID) => {
          promiseArray.push(listOfBoardInformation(listID.id, lists));
        });
      })
      .then(() => {
        return Promise.all(promiseArray).then((data) => {
          data = data.flat();
          promiseArray = [];

          data.filter((cardID) => {
            if (cardID)
              promiseArray.push(listOfCardInformation(cardID.id, cards));
          });
        });
      })
      .then(() => {
        Promise.allSettled(promiseArray).then((data) => {
          data.forEach((returnedValue) => {
            if (returnedValue.status == 'fulfilled') {
              console.log(returnedValue.value);
            } else {
              console.log(returnedValue.reason);
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 2 * 1000);
}

module.exports = getThanosAll;
