/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/
const getInformationOfBoards = require('./callback1');
const listOfBoardInformation = require('./callback2');
const listOfCardInformation = require('./callback3');

function getThanosAndMindAndSpace(
  boards,
  lists,
  cards,
  boardName,
  ...listName
) {
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
            if (listName.includes(cardID.name)) {
              promiseArray.push(listOfCardInformation(cardID.id, cards));
            }
          });
        });
      })
      .then(() => {
        Promise.all(promiseArray).then((data) => {
          data = data.flat();
          console.log(data);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, 2 * 1000);
}

module.exports = getThanosAndMindAndSpace;
