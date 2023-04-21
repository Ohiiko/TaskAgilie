function findDuplicates(arr) {
  let slow = arr[0];
  let fast = arr[0];

  do {
    slow = arr[slow];
    fast = arr[arr[fast]];
  } while (slow !== fast);

  slow = arr[0];

  while (slow !== fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  return fast;
}

module.exports = {findDuplicates};