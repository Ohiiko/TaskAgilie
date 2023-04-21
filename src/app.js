const fs = require('fs');

const { transformationPossible } = require('./task1/transformationPossible.js');
const { findDuplicates } = require('./task2/findDuplicates.js');
const { canGiftAllParticipants } = require('./task3/canGiftAllParticipants.js');
const { countGoodPositions } = require('./task4/countGoodPositions.js');

const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);

const jsonResult = fs.readFileSync('result.json');
const result = JSON.parse(jsonResult);

result.task1 = transformationPossible(data.task1.A, data.task1.B);
result.task2 = findDuplicates (data.task2);

result.task3_2 = canGiftAllParticipants (data.task3_2.sizes,
  data.task3_2.choiceParticipant);

result.task4 = countGoodPositions (data.task4.n,
  data.task4.m, data.task4.actors);

fs.writeFileSync('result.json', JSON.stringify(result));