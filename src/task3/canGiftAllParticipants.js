function canGiftAllParticipants(sizes, choiceParticipant) {
  const newSizes = {...sizes};
  const sizeLiteral = Object.keys(newSizes);
  const choiceParticipantOne = choiceParticipant.filter((i) => i.length === 1);
  let choiceParticipantTwo = choiceParticipant.filter((i) => i.length === 2);

  for (const index in sizeLiteral) {
    const chosenOne = choiceParticipantOne.filter(
      (i) => i[0] === sizeLiteral[index]).length;

    newSizes[sizeLiteral[index]] -= chosenOne;

    if (newSizes[sizeLiteral[index]] < 0) {
      return "No";
    }
  }

  for (let index = 0; index < sizeLiteral.length; index++) {

    const chosenTwo = choiceParticipantTwo.filter(
      (i) => i[0] === sizeLiteral[index] || i[1] === sizeLiteral[index]).length;

    if (newSizes[sizeLiteral[index]] - chosenTwo <= 0) {
      const overSizeValue = chosenTwo - newSizes[sizeLiteral[index]];

      newSizes[sizeLiteral[index + 1]] -= overSizeValue;
      newSizes[sizeLiteral[index]] = 0;

      if (newSizes[sizeLiteral[index + 1]] < 0) {
        return "No";
      }
    } else {
      newSizes[sizeLiteral[index]] -= chosenTwo;
    }

    choiceParticipantTwo = choiceParticipantTwo.filter(
      (i) => !i.includes(sizeLiteral[index]));
  }

  return  newSizes;
}

module.exports = {canGiftAllParticipants};