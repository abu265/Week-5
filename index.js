const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout


})

function calculate(num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)){
        console.log('Enter a Valid Number')
    }else{
        switch(operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if(num2 === 0){
                    return `Can't divide by 0`
                }else{
                    return num1 / num2;
                }
            default:
                return 'Invalid';
        }

    }

   
}

function startCalculator(){
    rl.question('Enter first number:', (num1) => {
        rl.question('Enter operator (+, -, *, /)',(operator)=>{
            rl.question('Enter second number:', (num2)=>{
                const result = calculate(num1, num2, operator)
                console.log(`The result is ${result}`)
                rl.close()
            })
        })
    })
    
}

startCalculator();

module.exports = calculate;