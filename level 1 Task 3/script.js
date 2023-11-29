function calculate(operator) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result');

    if(num1 === '' || num2 === '') {
        result.innerHTML = 'Please enter both numbers';
    } else {
        let firstNumber = parseFloat(num1);
        let secondNumber = parseFloat(num2);
        let calculation;

        switch(operator){
            case '+':
                calculation = firstNumber + secondNumber;
                break;
            case '-':
                calculation = firstNumber - secondNumber;
                break;
            case '*':
                calculation = firstNumber * secondNumber;
                break;
            case '/':
                if(secondNumber === 0) {
                    calculation = 'Error: Division by zero is not allowed';
                } else {
                    calculation = firstNumber / secondNumber;
                }
                break;
            default:
                calculation = 'Error: Invalid operator';
                break;
        }

        result.innerHTML = calculation;
    }
}