const list = require('../lists.json');
const listOfBoardInformation = require('../callback2.js');

listOfBoardInformation('mcu453ed', list, (error, listData) => {
  if (listData) console.log(listData);
  else console.log(error);
});
