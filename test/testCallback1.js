const boards = require('../boards.json');
const getInformationOfBoards = require('../callback1.js');

const promise = getInformationOfBoards('mcu453ed', boards);
promise
  .then((boardData) => {
    console.log(boardData);
  })
  .catch((error) => {
    console.log(error);
  });
