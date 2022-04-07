let nome = prompt("Digite seu nome: ");

while (nome === "") {
    prompt('Digite seu nome corretamente: ')
    nome = prompt("Digite seu nome: ");
}

alert(`Olá, ${nome}`);
