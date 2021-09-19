const boards = require('../boards.json');
const getInformationOfBoards = require('../callback1.js');

getInformationOfBoards('mcu453ed', boards)
  .then((boardData) => {
    console.log(boardData);
  })
  .catch((error) => {
    console.log(error);
  });
