//find

function myFind(array: string[] | number[], b: string | number) {
  for (const elemen of array) {
    if (elemen == b) {
      return elemen
    } else {
      return 'unday index yoq'
    }
  }
}
let age: number[] = [13, 15, 10, 45, 35, 24]
console.log(myFind(age, 1))
//find tugadi

//map
type Pred = (n: number) => number;
//
const addeven = (array: number[], e: Pred) => {
  let clean: number[] = []
  for (const element of array) {
    if (e(element)) {
      clean.push(element)
    }
  }
  return clean
}
console.log(addeven([2, 4, 5, 6, 66, 7, 7], (n: number) => n % 2));
//map tugadi

//fill
let m: number[] | string[] = [1, 2, 3, 4, 4, 5,]
const fillNew = (array: number[] | string[], change: number | string) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = change
  }
  return array

}
console.log(fillNew(m, 'abbos'));

