"use strict";
const generateRandomRange = function* (start, end, count) {
    for (let i = 0; i <= count; i++)
        yield Math.floor(Math.random() * (end - start)) + start;
};
const generatePasswordCodes = function* () {
    // generate signs like ! - @ # $
    yield* generateRandomRange(33, 47, 10);
    // generate numbers
    yield* generateRandomRange(48, 57, 10);
    // generate capital letters
    yield* generateRandomRange(65, 90, 4);
    // generate lowercase letters
    yield* generateRandomRange(97, 122, 2);
};
const randomizeString = function (str) {
    let arr = str.split("");
    // the Fisher-yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
        // picking a random index
        let j = Math.floor(Math.random() * (i + 1));
        // Swapping arr[i] with a random index.
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
};
let str = "";
for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}
str = randomizeString(str);
console.log(str);
