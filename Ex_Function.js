
let a = 10;
let b = 30;

function somar(a, b) {
    return a + b;
}

console.log("A soma de", a, "e", b, "é", somar(a, b));

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

let num = 7;
console.log("O número", num, "é", verificarParOuImpar(num));

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

let numero = 5;
console.log("O fatorial de", numero, "é", fatorial(numero));

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;
console.log(celsius, "graus Celsius é igual a", celsiusParaFahrenheit(celsius), "graus Fahrenheit.");

function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

let texto = "JavaScript";
console.log("A string invertida de", texto, "é", inverterString(texto));


