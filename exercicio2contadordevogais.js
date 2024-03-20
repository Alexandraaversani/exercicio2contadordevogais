// Declarando o texto de entrada
let texto = "Alexandra Cristina Aversani";

// Declarando variáveis para armazenar contagens
let contagemVogais = 0;
let contagemConsoantes = 0;
let contagemEspacos = 0;

// Lista de vogais em minúsculas
let vogais = 'aeiouAEIOU';

// Iterando sobre cada caractere no texto
//i é inicializado com o valor 0, indicando que o loop começará a partir do primeiro caractere do texto
//i < texto.length essa é a parte da condição do loop e enquanto for verdadeira o loop continuará a ser executado
//i++ este é o incremento do contador i
for (let i = 0; i < texto.length; i++) {
    //let letra é utilizada para armazenar o caractere do texto que está sendo analisado
    let letra = texto[i];
    // Verifica se a letra é uma vogal
    if ('aeiouAEIOU'.includes(letra)) {
        contagemVogais++;
    }
    // Verifica se a letra é uma consoante
    else if (('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ').includes(letra)) {
        contagemConsoantes++;
    }
    // Verifica se a letra é um espaço
    else if (letra === ' ') {
        contagemEspacos++;
    }
}

// Exibindo os resultados
console.log("Texto original:", texto);
console.log("Total de vogais:", contagemVogais);
console.log("Total de consoantes:", contagemConsoantes);
console.log("Total de espaços:", contagemEspacos);