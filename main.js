function basicCalc(num1, num2, operator ="+") {
    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;

        default: " somethings goes wrong "
            break;
    }
}
console.log(basicCalc(5, 3 ,"+"));
console.log(basicCalc(7,8, "*"));
console.log(basicCalc(70,14, "/"));
console.log(basicCalc(70,10, "-"));
console.log(basicCalc(9,6));