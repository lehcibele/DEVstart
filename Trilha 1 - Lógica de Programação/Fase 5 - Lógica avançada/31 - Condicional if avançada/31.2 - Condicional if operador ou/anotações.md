# Condicional if com operador "ou"

## Exercício - Obter preço do bilhete
Complete a função obterPrecoDoBilhete() de forma que ela retorne o preço de uma viagem de trem em centavos, conforme a idade do usuário.

O preço de uma viagem de trem é de R$ 40 (4.000 centavos). No entanto, usuários com menos de 18 anos e usuários com mais de 60 anos recebem um desconto de 50%.

Faça com que a função retorne o valor do bilhete esperado em centavos.

### Testes
- Implemente obterPrecoDoBilhete().

### Código

- [Obter preço do bilhete](./obterPrecoBilhete.js)

## Exercício - Pode visualizar artigo?
Você está criando uma função que faz parte de um blog onde os usuários podem publicar artigos.

Complete a função podeVisualizarArtigo() de forma que ela retorne:

true quando o parâmetro tipo, que representa o tipo de usuário, for "admin".
true quando o parâmetro ehAutor for true.
false nas demais situações.
Importante: O autor do artigo sempre pode visualizar seu próprio artigo. O administrador pode visualizar qualquer artigo.

Complete a função para que ela retorne true quando o usuário tiver permissão para visualizar o artigo, e false caso contrário.

### Testes
- Implemente a função podeVisualizarArtigo().

### Código

- [Pode visualizar artigo?](./podeVisualizarArtigo.js)

## Exercício - Plano de usuário profissional ou gratuito
Complete a função obterPlanoDoUsuario() de forma que ela retorne:

"profissional", quando o usuário pagou e completou pelo menos 10 desafios (inclusive).
"gratuito" em todos os outros casos.
A função recebe dois parâmetros:

pagou, que terá valor true caso o usuário tenha pago, e false caso contrário.
desafios completos, que indica a quantidade de desafios que o usuário completou

### Testes 
- Implemente obterPlanoDoUsuario()

### Código

- [Plano de usuário profissional ou gratuito](./planoDeUsuarioProfissionalGratuito.js)
