let canvas = document.getElementById("canvo");
let ctx = canvas.getContext("2d");
let wrongAnswer = 0;
const Words = ["apple", "berry", "cherry", "grape", "lemon", "lime", "mango", "peach", "pear", "plum", "banana", "carrot", "celery", "onion", "tomato", "pasta", "rice", "toast", "pizza", "burger", "salad", "sushi", "bagel", "croissant", "donut", "cheese", "chips", "pretzel", "cookie", "brownie", "fudge", "candy", "sugar", "honey", "jam", "syrup", "coffee", "juice", "tea", "water", "soda", "beer", "wine", "whiskey", "vodka", "gin", "rum", "tequila", "brandy", "bacon", "beef", "chicken", "pork", "fish", "shrimp", "clam", "crab", "lobster", "steak", "sausage", "hotdog", "ham", "turkey", "bacon", "beans", "corn", "peas", "potato", "rice", "salmon", "tuna", "trout", "carrot", "pepper", "onion", "garlic", "herbs", "spice", "salt", "pepper", "sugar", "flour", "butter", "oil", "vinegar", "cheese", "milk", "yogurt", "egg", "bread", "pasta", "soup", "stew", "sauce", "gravy", "dip", "chips", "cracker", "bread", "cake", "pie", "cookie", "brownie", "pudding", "icecream"];
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let randomIndex = Math.floor(Math.random() * Words.length);
let word = Words[randomIndex];
guessing.innerHTML = "";
console.log(word);




let guessOutput = "";
for (let i = 0; i < word.length; i++) {
    guessOutput = guessOutput + "_";
}

guessing.innerHTML = guessOutput;

addEventListener("keypress", letterEntered);


function setCharAt(str,index,chr) {
  if(index > str.length-1){
    return str;
  }
  return str.substring(0,index) + chr + str.substring(index+1);
}


function letterEntered(kad) {
 if (kad.keyCode == 13){
    Input = inputType.value;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == Input) {
            guessOutput = setCharAt(guessOutput, i, Input);
            console.log(guessOutput);
        }
    }
    if (alphabet.includes(Input) !== true && Input != "") {
        console.log("wow thats not a letter")
    }
    if (Input == "") {
        console.log("wow thats an nothing")
    }
     
     
 }
 guessing.innerHTML = guessOutput;
}


function Game(wrongAns) {
    wrongAns =  wrongAns + 1
    switch (wrongAns) {
    // Frame
        case 1:
            ctx.beginPath();
            ctx.lineWidth = 5
            ctx.strokeStyle = "#B27C66"
            ctx.moveTo(75,450);
            ctx.lineTo(75,45);
            ctx.stroke();
            break;
        case 2:
            ctx.beginPath();
            ctx.moveTo(75,47.5);
            ctx.lineTo(325,47.5);
            ctx.stroke();
            break;
        case 3:
            ctx.beginPath();
            ctx.moveTo(322.5,47.7);
            ctx.lineTo(322.5,450);
            ctx.stroke();
            break;
        case 4:
            ctx.beginPath();
            ctx.moveTo(200,45);
            ctx.lineTo(200,100);
            ctx.stroke();
            break;
    // Head
        case 5:
            ctx.beginPath();
            ctx.strokeStyle = "#000000"
            ctx.arc(200, 125, 25, 0, 2 * Math.PI);
            ctx.stroke();
            break;
    // Body
        case 6:
            ctx.beginPath();
            ctx.moveTo(200,150);
            ctx.lineTo(200,300);
            ctx.stroke();
            break;
    // Legs
        case 7:
            ctx.beginPath();
            ctx.moveTo(200,300);
            ctx.lineTo(235,390);
            ctx.stroke();
            break;
        case 8:
            ctx.beginPath();
            ctx.moveTo(200,300);
            ctx.lineTo(165,390);
            ctx.stroke();
            break;
    // Arms
        case 9:
            ctx.beginPath();
            ctx.moveTo(200,180);
            ctx.lineTo(250,260);
            ctx.stroke();
            break;
        case 10:
            ctx.beginPath();
            ctx.moveTo(200,180);
            ctx.lineTo(150,260);
            ctx.stroke();
            break;
        case 11:
            alert("You are Dead lmao")
            break;
    }
}