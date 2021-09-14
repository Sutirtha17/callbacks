const lists = require('../lists.json');
const listOfBoardInformation = require('../callback2.js');

listOfBoardInformation('mcu453e', lists, (error, listData) => {
  if (listData) console.log(listData);
  else console.log(error);
});
