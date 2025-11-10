# Sobrescrevendo métodos da classe pai

```
class Administrador extends Funcionario {
    obtemNomeCompleto() {
        return `${this.nome} ${this.sobrenome} (admin)`
    }
}
```

## Exercício - ️️Sobrescrevendo um método da classe Usuário
Defina uma classe Escritor, filha da classe Usuario, que contenha os seguintes métodos de instância:

obterNomeCompleto(), que retorna uma string contendo o nome completo do escritor, adicionando ao final um caractere de espaço e o texto "[escritor]".
podeVotar(), que retorna true quando a idade é de 16 anos ou mais, e false caso contrário.
publicarArtigo(), que exibe no console o texto: "Artigo publicado".
Observe a classe Usuario existente, e certifique-se de fazer a herança de classe e sobrescrever o método que foi solicitado.

Seguem dois exemplos de retorno do método obterNomeCompleto() que você vai implementar:

a) Para o nome "Paulo" e sobrenome "Marques", o retorno será: "Paulo Marques [escritor]"

b) Para o nome "Luis" e sobrenome "Vieira", o retorno será: "Luis Vieira [escritor]"

### Testes
- Defina a classe Escritor.
- Faça a classe Escritor ser filha da classe Usuario.
- Implemente os métodos de instância publicarArtigo() e obterNomeCompleto().
### Código

- [️️Sobrescrevendo um método da classe Usuário](./sobrescrevendoUmMetodoDaClasseUsuario.js)

## Exercício - ️️Classes Gerente e Funcionário
Complete a classe Gerente, filha da classe Funcionario, de forma que ela possua todos os métodos de sua classe pai, que são:

obterNomeCompleto()
obterIniciais()
obterPosicao()
O método obterPosicao() da classe Gerente deverá retornar a string:

"X é o gerente"

onde X é o primeiro nome do gerente.

Observe a classe Funcionario existente, e certifique-se de usar herança de classe.

### Testes
- Implemente o método de instância obterPosicao().

Crie a classe Gerente como filha da classe Funcionario.

### Código

- [️️Classes Gerente e Funcionário](./classesGerenteEFuncionarios.js)