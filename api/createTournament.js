/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

const { faker } = require('@faker-js/faker');
const random = require('lodash.random');
const upperFirst = require('lodash.upperfirst');
const moment = require('moment')

const games = [
  'Counter-Strike: Global Offensive',
  'Dota 2',
  'Rocket League',
  'Battalion 1944',
  'League of Legends',
];

function createTournament(name) {
  moment.locale('en-gb');
  const startDate = moment().format("DD/MM/YYYY, HH:mm:ss");
  return {
    id: faker.datatype.uuid(),
    name:
      name ||
      faker.lorem.words(random(2, 4)).split(' ').map(upperFirst).join(' '),
    organizer: faker.lorem
      .words(random(1, 2))
      .split(' ')
      .map(upperFirst)
      .join(' '),
    game: games[random(0, games.length - 1)],
    participants: {
      current: random(0, 256),
      max: 256,
    },
    startDate: startDate,
  };
}

module.exports = createTournament;
