let a = parseInt(prompt("Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));
let mdc;

let menor = a < b ? a : b;

while (menor > 0) {
    if (a % menor === 0 && b % menor === 0) {
        mdc = menor;
        break;
    }
    menor--;
}

document.write("O máximo divisor comum de ", a, " e ", b, " é ", mdc);