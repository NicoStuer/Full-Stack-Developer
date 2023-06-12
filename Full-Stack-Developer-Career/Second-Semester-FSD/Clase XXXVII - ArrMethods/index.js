const nums = [1, 4, 6, 7, 9, 0];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}

nums.forEach((num, idx, arr) => {
    console.log("elemento: " + num)
    console.log("indice: " + idx)
    console.log("nuestos arr: " + arr)
})

for (const num of nums) {
    console.log(num);
}

for (const idx in nums) {
    console.log(idx);
}


//Mapeado
const result = [];
for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2)
}
console.log(result)

const squared = nums.map(num => num * num);
console.log(squared);

const numsCopy = nums.map(n => n);
numsCopy.push(100)
console.log(numsCopy);
console.log(nums);


//Filter
//return a new array whith odd numbers
const oddArr= [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 !== 0) {
    oddArr.push(nums[i]);
  }
}
console.log(oddArr);

const oddNumbers = nums.filter(num => num % 2 !== 0);
console.log(oddNumbers)

//Reducer
//return a neu array with sum of all elements(reducer function)

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

const totalFromNums = nums.reduce((accum, curr) => accum + curr, 0);
console.log(totalFromNums);

//Find

console.log(nums.indexOf(167));//returns -1 
console.log(nums.indexOf(4));//returns 1 (first occurrence)
console.log(nums.lastIndexOf(4));//return 4 (last occurrence)
console.log(nums.find(num => num === 4));//returns 4 
console.log(nums.find(num => num === 49));//returns undefined
console.log(nums.findIndex(num => num === 4))//returns 1
console.log(nums.includes(102));//returns false 
console.log(nums.includes(9));//returns true 
console.log(nums.sort());//ordena el arreglo pero modifica el arreglo original lo arregla como strings
console.log(nums.sort((a, b) => a - b))//lo ordena como numeros
console.log(nums.sort((a, b) => a - b)).reverse()//lo ordena como numeros al reves.

let pets = ["Carlitos", "Peter", "Leona", "Nairobi"];
pets.splice(2, 1, "Evaristo", "Chummy")
console.log(pets)
console.log(pets.some((pet)=> pet === "Jacinta"))//Si alguno de los elementos cumple cn la condicion true or false
const sadFaces = ["😢", "😢", "😢"];
console.log(sadFaces.every(face => face === "😢"));//se tiene que cumplir la condicion en todos los elementos
console.log(nums.join("- "))

pet.slice(2, 5)//recorta el arreglo
