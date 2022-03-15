"use strict";
//find
function myFind(array, b) {
    for (const elemen of array) {
        if (elemen == b) {
            return elemen;
        }
        else {
            return 'unday index yoq';
        }
    }
}
let age = [13, 15, 10, 45, 35, 24];
console.log(myFind(age, 1));
//
const addeven = (array, e) => {
    let clean = [];
    for (const element of array) {
        if (e(element)) {
            clean.push(element);
        }
    }
    return clean;
};
console.log(addeven([2, 4, 5, 6, 66, 7, 7], (n) => n % 2));
//map tugadi
//fill
let m = [1, 2, 3, 4, 4, 5,];
const fillNew = (array, change) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = change;
    }
    return array;
};
console.log(fillNew(m, 'abbos'));
