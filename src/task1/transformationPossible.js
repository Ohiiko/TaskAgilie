function transformationPossible(A, B) {
  let newB = B;
  const lastDigit = B % 10;

  if (lastDigit === 1) {
    newB = Math.round(B / 10);

    return newB === A ? true : transformationPossible(A, newB);
  }

  if (lastDigit % 2 === 0) {
    newB = B / 2;

    return newB === A ? true : transformationPossible(A, newB);
  }

  return false;
}

module.exports = {transformationPossible};