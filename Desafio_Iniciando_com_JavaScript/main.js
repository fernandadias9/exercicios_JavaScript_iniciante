// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 5563;
const numberTwo = 1236589;

alert(numberOne + numberTwo);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const something = "something";

if (typeof something === Number) {
  alert("É um número")
} else {
  alert("Não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const text = "Procurando uma String";

if (typeof text === "string") {
  alert("É uma string")
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true;

if (typeof isBoolean === "boolean") {
  alert("É um booleano")
} else {
  alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const firstVariable = 77789;
const secondVariable = 321;

alert(firstVariable - secondVariable);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const first = 5;
const second = 8;

alert(first * second);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const varOne = 78;
const varTwo = 8;

alert(varOne / varTwo);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isEven = 569;

if (isEven % 2 === 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOdd = 125;

if (isEven % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}