const boards = require('../boards.json');
const lists = require('../lists.json');
const cards = require('../cards.json');

const getThanosAll = require('../callback6');

getThanosAll(boards, lists, cards, 'Thanos');
