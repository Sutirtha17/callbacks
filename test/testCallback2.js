const lists = require('../lists.json');
const listOfBoardInformation = require('../callback2.js');

listOfBoardInformation('mcu453ed', lists)
  .then((listData) => {
    console.log(listData);
  })
  .catch((error) => {
    console.log(error);
  });
