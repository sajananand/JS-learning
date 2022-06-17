
// input
const arr = [
  [1,2],
  [3,4,5,6],
  [1,2,6,[8,9,6]],
  [1,3,5]
];

// output => [1,2,3,4,5,6,1,2,6,8,9,6,1,3,5]  custom flattening


// way #1
// =====
const resArr = arr.flat(3);   // where 3 is the level of flattening
console.log(resArr);
// =====


//#2 for 1 level flatteing
// =====
const resArr2 = [].concat(...arr);
console.log(resArr2);   //1, 2, 3, 4, 5, 6, 1, 2, 6, [ 8, 9, 6 ], 1, 3, 5  one level deep shortcut
// =====


// #3 custom flat method
// =====
const customFlat = (dataArr, depth) => {
  let result = [];
  dataArr.forEach(el => {
   if(Array.isArray(el) && depth >  0) {
    result.push(...customFlat(el , depth - 1))
   } else {
     result.push(el);
   }   
  })
  return result;
}

console.log(customFlat(arr , 3));
// =====


