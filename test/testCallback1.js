const boards = require('../boards.json');
const getInformationOfBoards = require('../callback1.js');

getInformationOfBoards('mcu453ed', boards, (error, data) => {
  if (data) console.log(data);
  else console.log(error);
});
