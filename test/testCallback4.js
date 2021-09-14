const boards = require('../boards.json');
const lists = require('../lists.json');
const cards = require('../cards.json');

const getThanosAndMind = require('../callback4');

getThanosAndMind(boards, lists, cards, 'Thanos', 'Mind');
