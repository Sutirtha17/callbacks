const boards = require('../boards.json');
const lists = require('../lists.json');
const cards = require('../cards.json');

const getThanosAndMindAndSpace = require('../callback5');

getThanosAndMindAndSpace(boards, lists, cards, 'Thanos', 'Mind', 'Space');
