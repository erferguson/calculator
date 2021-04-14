let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if ( isNaN(value) ){
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value); 
    }
    screen.innerText = buffer; 
};



function handleNumber(value){
    if( buffer === "0" ){
        buffer = value;
    } else {
        buffer += value
        // buffer = buffer + value
    }
}

function handleMath(value){
    console.log('handle Math', value)

    if ( buffer === "0"){
        // do nothing
        return
    }
    const intBuffer = parseInt(buffer);
    // const intBuffer = +buffer; -- same code/outcome as above
    if ( runningTotal === 0){
         runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "0";
}

function flushOperation(intBuffer){
    // switch( previousOperator){
    //     case "+":
    //         runningTotal += intBuffer;
    //         break;
    //     case "-":
    //         runningTotal -= intBuffer;
    //         break;
    //     case "x":
    //         runningTotal *= intBuffer;
    //         break;
    //     case "÷":
    //         runningTotal /= intBuffer;
    // }
    if( previousOperator === "+"){
        runningTotal += intBuffer;
    } else if ( previousOperator === "−"){
        runningTotal -= intBuffer;
    } else if ( previousOperator === "×"){
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    console.log('running total', runningTotal)
}

function handleSymbol(symbol){
    console.log('handle symbol', symbol)
    // if(symbol === "C"){
    //     buffer = "0";
    //     runningTotal = 0;
    // }

    switch(symbol){
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case '=':
            if ( previousOperator === null ){
                // need two numbers to do math
                // edge case?
                return 
            }
            flushOperation( parseInt(buffer) );
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if ( buffer.length === 1){
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1)
            }
            break;
        case "+":
        case "−":
        case "×":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function init(){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText)
    })
}
init();


