# Importar tarefas de uma lista CSV

- Método **.slipt()** esse método fica dentro da string e recebe um parâmetro chamado de separador, geralmente é uma vigula.
- O **.slipt()** divide a string em pedaços com base no separador e coloca os pedaços em uma matriz.

```
let planetas = "Mercúrio,Vênus,Terra";

let matriz = planetas.slipt(",");
console.log(matriz); // ["Mercúrio", "Vênus", "Tetra"]
```

```
let string = `1 - 2 - 3`;
string.split(" - "); // ["1", "2", "3"]
```

## Exercício - ️️Aplicativa para importar tarefas do CSV
Conclua a classe Tarefas com os seguintes métodos de instância:

importarCSV(), que recebe uma string CSV, a converte em um array de tarefas e a armazena na variável de instância this.tarefas.
obterQuantidadeDeTarefas(), que retorna o número de tarefas.
obterPrimeiraTarefa(), que retorna a primeira tarefa.
obterUltimaTarefa(), que retorna a última tarefa.
obterTarefasEmCSV(), que retorna uma string de todas as tarefas em letras minúsculas e separadas por um caractere de vírgula e um caractere de espaço (ou seja, faz uma exportação em formato CSV).
Siga as instruções acima.

### Testes
- Implemente importarCSV()
- Implemente obterQuantidadeDeTarefas()
- Implemente obterPrimeiraTarefa()
- Implemente obterUltimaTarefa()
- Implemente obterTarefasEmCSV()
### Código

- [️️Aplicativa para importar tarefas do CSV](./aplicativoParaImportarTarefasDoCsv.js)