# Por que precisamos de classes?

- As **classes** permitem agrupar as variáveis e funções que descrevem uma entidade (produto, usuário, receita e etc...)


## Objeos e Classes são diferentes

- **Objetos:** Agrupam variáveis.
- **Classes:** Agrupam variáveis e funções.


| Sem classe | Com Classe |
| ---------- | ---------- |
| obterNomeCompleto(nome, sobrenome); | caio.obterNomeCompleto(); |
| obterNomeCompleto(nome, sobrenome); | caio.obterNomeCompleto(); | caio.obterIniciais(); |
| podeVotar(idade); | caio.podeVotar();

## Nomenclatra dentro da classe

- **Variáveis:** Propriedades.
- **Funções:** Métodos.


```
let caio = new Usuario("Caio", "Sanches", 30);
caio.obterNomeCompleto();
caio.obterIniciais();
caio.podeVotar();
```

