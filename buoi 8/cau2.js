// Câu 2: Cộng một đơn vị vào mảng số nguyên
// Input: digits = [1,2,3]
// Output: [1,2,4]
 
// Input: digits = [0]
// Output: [1]
 
// Input: digits = [9]
// Output: [1,0]
const a = [1,2,3];
const b = [0];
const c = [9];


const insert = arr => {
    arr =  arr.join("");
    arr = Number(arr);
    arr = ++arr;
    return arr.toString().split("").map(
        user => Number(user)
    )
  
}

console.log(insert(a));
console.log(insert(b));
console.log(insert(c));