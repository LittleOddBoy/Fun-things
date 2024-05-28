function* generateSequence(start, end, count) {
  // for (let i = start; i <= end; i++) yield i;
  for (let i = 0; i <= count; i++) yield Math.floor(Math.random() * (end - start)) + start;
}

function* generatePasswordCodes() {
  yield* generateSequence(33, 47, 10)

  // 0..9
  yield* generateSequence(48, 57, 10);

  // A..Z
  yield* generateSequence(65, 90, 4);

  // a..z
  yield* generateSequence(97, 122, 2);
}

let str = '';

function randomizeString(str) {
  let arr = str.split("");

  // Apply the Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));

    // Swap arr[i] with the element at the random index
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join('');
}

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

str = randomizeString(str);
console.log(str);
