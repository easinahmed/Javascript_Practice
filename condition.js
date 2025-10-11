const biriyaniPrice = 400;
if (biriyaniPrice < 300) {
    console.log("Mama biriyani dew");
    
} else {
    console.log("chol puri khai");
    
}


const rainingOutside = true;
if (rainingOutside) {
  console.log("You and me - under the tree");
      
}else{
    console.log("no rain. No romance");
    
}


const salary = 63000
const isBCS = true

if (salary > 50000 && isBCS) {
    console.log("Mama sei lvl er ---- patro");
    
    
}else{
    console.log("dure jaiya mor hala");
    
}

const isSalary = 23000
const height  = 64

if (salary > 50000 || height > 72) {
    console.log("bolo baba kobul");
    
    
}else{
    console.log("vaag tui mokbul");
    
}

const price = 4000
if (price>= 5000) {
    const discount = (price/100)*15    
    const pay = price - discount
    console.log(pay);
    
}else if (price >=2500 ){
    const discount = (price/100)*5    
    const pay = price - discount
    console.log(pay);
    
    
}else{
    console.log(price);
    
}

// Nested Condition
const money = 200
const popcornPrice = 60

if (money >= 300){
    console.log("Going to watch a movie");
    if (popcornPrice<= 50) {
        console.log("Buying a Popcorn");
        
        
    }else{
        console.log("Popcorn is too expensive");
        
    }
    
}else{
    console.log("Home Alone");
    
}

// Ternary Oparetor
const age=18

age >= 18 ? console.log("Eligible") : console.log("Not Eligible");

let isPrice= 500
let isLeader =false

isPricerice = !isLeader ? console.log("apner laiga free"): console.log(isPrice+100);

