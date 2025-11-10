# Nome para passaporte

- O método **.startsWith()** retorna true ou false, caso o caractere/palavra passado esteja presente no inicio da string.

```
let string = "Olá, mundo!"

string.startsWith("O"); // true
string.startsWith("o"); // false
string.startsWith("Olá"); // true
string.startsWith("mundo"); // false
```

```
let string = "Olá, mundo!"

string.endsWith("""); // true
string.endsWith("o"); // false
string.endsWith("Olá"); // false
string.endsWith("mundo"); // false
string.endsWith("mundo!"); // true
```

## Exercício - Aplicativo de visualização de passaporte
Preencha a classe Passaporte, de forma que ela inclua os seguintes métodos de instância:

obterNome(), que retorna o primeiro nome em letras minúsculas.
obterSobrenome(), que retorna o sobrenome em letras maiúsculas.
obterNomeCompleto(), que retorna o nome e o sobrenome separados por um caractere de espaço.
obterIniciais(), que retorna o primeiro caractere do primeiro nome seguido por um caractere de ponto (.), seguido pelo primeiro caractere do sobrenome e seguido por um caractere de ponto (.).
obterEhNomeValido(), que retorna a string "Sim" quando o primeiro nome tem pelo menos 1 caractere e o sobrenome tem pelo menos 1 caractere e o sobrenome NÃO termina com um caractere de ponto (.). Em todos os outros casos, deve retornar a string "Não".
Nota: a classe é inicializada com 2 argumentos: o primeiro nome e o sobrenome.


### Testes
- Implemente obterNome()
- Implemente obterSobrenome()
- Implemente obterNomeCompleto()
- Implemente obterIniciais()
- Implemente obterEhNomeValido()

### Código

- [Aplicativo de visualização de passaporte](./aplicativoDeVisualizacaoDePassaporte.js)