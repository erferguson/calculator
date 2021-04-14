
let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value); 
    }
        
};

function handleSymbol(symbol){}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    } else {
        buffer = buffer + numberString
    }
    console.log('buffer', buffer)
    screen.innerText = buffer;
}

function init(){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText)
    })
}
init();


