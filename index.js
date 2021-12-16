// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function removeFirstCat() {
    return cats.shift();
}

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let newArray = cats.slice();
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    let newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    let newArray = cats.slice();
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    let newArray = cats.slice();
    newArray.shift();
    return newArray;
}