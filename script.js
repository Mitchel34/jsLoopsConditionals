// Practice writing for loops
// Write a for loop that prints 0-10 to the console.
console.log("A for loop that prints 0-10 to the console.")
for (let i =0; i<11; i++){
console.log(i)
}

// Write a for loop that prints the items in an array.
console.log("Printing items in an array")
let carArr = ["toyota", "kia"," bmw", "Mercedes-Benz"];
for (let i = 0; i < carArr.length; i++){
    console.log(carArr[i])
}

// Write a for loop that prints the items in an array in reverse order.
console.log("Printing items in an array in reverse order.")
for (let i = carArr.length -1;i > -1; i--){
console.log(carArr[i])
}

