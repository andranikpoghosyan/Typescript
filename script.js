"use strict";
function findFirstStringIndex(params) {
    return params.findIndex((elem) => typeof elem === "string");
}
const result = findFirstStringIndex([
    true,
    "ookinncd",
    false,
    1,
    2,
    3,
    4,
    "abc",
    "def",
    "ghi",
    null,
    undefined,
]);
console.log(result);
function suffleFunction(params) {
    return params.sort(() => Math.random() - 0.5);
}
const res = suffleFunction(["a", "b", "c", "d", "e", "f", "g"]);
console.log(res);
function changeNumbersValue(params) {
    return params.map((elem) => Math.pow(elem, 3));
}
const answer = changeNumbersValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(answer);
function getUsersFromServer() {
    const response = fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json());
    return response;
}
const allUsers = getUsersFromServer();
console.log(allUsers);
function secondBiggestNumber(params) {
    return params.sort((a, b) => a - b).slice(-2)[0];
}
const answer1 = secondBiggestNumber([
    2, 4, 6, 8, 0, 12, 13, 65, 99, 6114, 15, 19,
]);
console.log(answer1);
