//Crie um array que receba 5 itens e exiba no console.
//Utilize um método para adicionar um nome ao inicio do array.
//Utilize um método para remover o último nome do array.
//Utilize um método para adicionar dois nomes ao fim do array.
//Utilize um método para remover o primeiro nome do array.
//Utilize um método para organizar em ordem crescente o seguinte array: const numbers = [7,5,6,3,8,9,2,1,4]

//01-Crie um array que receba 5 itens e exiba no console:
let list = ["Luiz", "Angela", "Sabrina", "Davi", "Esther"]
console.log(list);


//02-Utilize um método para adicionar um nome ao inicio do array:
let list01 = ["Luiz", "Angela", "Sabrina", "Davi", "Esther"]
list01.unshift("Daniel");
console.log(list01);


//03-Utilize um método para remover o último nome do array:
let list02 = ["Luiz", "Angela", "Sabrina", "Davi", "Esther"]
list02.pop();
console.log(list02);

//04-Utilize um método para adicionar dois nomes ao fim do array:
let list03 = ["Luiz", "Angela", "Sabrina", "Davi", "Esther"]
let add = list03.push("Romildo", "Sheila");
console.log(list03);


//05-Utilize um método para remover o primeiro nome do array:
let list04 = ["Luiz", "Angela", "Sabrina", "Davi", "Esther"]
list04.shift();
console.log(list04);


//06-Utilize um método para organizar em ordem crescente o seguinte array: const numbers = [7,5,6,3,8,9,2,1,4]
let number = [7,5,6,3,8,9,2,1,4]
number.sort(function (a, b){
    return a - b
})
console.log(number);