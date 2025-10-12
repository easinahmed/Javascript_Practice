// Looping practice
// For Of Loop
const fruites = ["apple", "orange", "banana", "papaya", "adocova", "watermelon", "jackfruit"]

fruites[1]= "lemon"
fruites.pop()
fruites.shift()
fruites.unshift("cinnamon")

for ( const name of fruites){
    
    console.log(name);
    
}

// While loop
let sum = 0
let num= 0
while (num <= 10) {
    console.log(num );
    sum= sum + num
    num ++
    
    
}
console.log("Sum:", sum);

let studentsSum = 0
let studentsNum = 1
while (studentsNum < 50) {
        console.log(studentsNum);
        studentsSum += studentsNum
        studentsNum++
            
}console.log(studentsSum);

// -----------

let number = 21
let sumOFNum = 0
while (number < 50) {
    // console.log(number);
    sumOFNum += number
    number++
    console.log(sumOFNum);
        
    
}console.log(sumOFNum);



