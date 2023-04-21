function countGoodPositions(n, m, actors) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {

      if (actors[i][j] === 0) {

        for (let k = j - 1; k >= 0; k--) {
          if (actors[i][k] === 1) {
            count++;
            break;
          } else if (actors[i][k] === -1) {
            break;
          }
        }

        for (let k = j + 1; k < m; k++) {
          if (actors[i][k] === 1) {
            count++;
            break;
          } else if (actors[i][k] === -1) {
            break;
          }
        }

        for (let k = i - 1; k >= 0; k--) {
          if (actors[k][j] === 1) {
            count++;
            break;
          } else if (actors[k][j] === -1) {
            break;
          }
        }

        for (let k = i + 1; k < n; k++) {
          if (actors[k][j] === 1) {
            count++;
            break;
          } else if (actors[k][j] === -1) {
            break;
          }
        }
      }
    }
  }

  return count;
}

module.exports = {countGoodPositions};