const lists = require('../lists.json');
const listOfBoardInformation = require('../callback2.js');

const promise = listOfBoardInformation('mcu453ed', lists);
promise
  .then((listData) => {
    console.log(listData);
  })
  .catch((error) => {
    console.log(error);
  });
