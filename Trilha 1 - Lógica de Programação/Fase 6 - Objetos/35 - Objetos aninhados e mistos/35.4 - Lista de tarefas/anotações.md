# Projeto 16 - Lista de tarefas

Neste projeto, você vai trabalhar com uma lista de tarefas simples. O usuário define o título da tarefa e indica se ela está completa ou não. Então, ele clica no botão "Adicionar", e a função criarTarefa() é chamada.

A função criarTarefa() recebe um objeto dados como parâmetro e exibe esse objeto no console, para que você possa visualizá-lo. Depois disso, ela deve criar um novo objeto, chamado objetoRetorno, que vai representar a tarefa, com a seguinte estrutura:

{
    titulo: "Minha tarefa", // Título da tarefa
    estaCompleta: true, // Booleano indicando se a tarefa está completa ou não
    categoria: "Trabalho", // Categoria da tarefa
    autor: { // Objeto aninhado contendo os dados do usuário
        nome: "Carlos",
        sobrenome: "Varela"
    }
}

Note que as informações acima são apenas um exemplo. O conteúdo do objeto objetoRetorno será obtido a partir do parâmetro dados.

Aqui está o que você deve fazer:

Preencha o formulário de criação de tarefa e observe a saída no console.
Complete a função criarTarefa para retornar um objeto conforme foi explicado.
Não faça harcoding. Para facilitar, deixamos apenas o retorno da função para que você insira o código dentro dele.

### Testes
- Implemente a função criarTarefa().

### Código 

- [# Projeto 16 - Lista de tarefas]()