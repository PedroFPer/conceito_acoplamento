#Conceitos de Acoplamento - POO

Para maior eficiência e manutenibilidade do código, foram criadas diversas formas de organizá-lo, com o objetivo de torná-lo mais estruturado e menos repetitivo. Isso gera um código mais performático e organizado.

Um dos conceitos fundamentais para isso é o acoplamento. O acoplamento tem como objetivo reduzir a repetição de código, definindo comportamentos padrão e compartilhando esses mesmos comportamentos entre várias classes, sem a necessidade de duplicar a mesma lógica em diferentes partes do sistema.

As três formas que iremos abordar são Herança, Composição e Injeção de Dependência.

Para melhor compreensão, o código presente neste repositório contém os três tipos de abordagem, podendo ser escolhidos através de um menu inicial. Cada implementação tem o mesmo propósito: definir comportamentos pré-determinados para diferentes animais, porém utilizando abordagens distintas.

Herança
A herança permite que possamos definir em uma única classe comportamentos padrão, como métodos e atributos. Quando outras classes se tornam "filhas" dessa classe base, elas automaticamente herdam seus comportamentos.

Isso é extremamente útil em situações em que várias classes compartilham informações padronizadas. No entanto, há um problema: não podemos escolher quais comportamentos serão herdados por cada classe filha. Isso pode gerar situações inesperadas, como no exemplo do código, onde um peixe acaba sendo capaz de andar.

Composição
A composição é uma forma de contornar o problema da herança. No exemplo do código, ainda temos a classe Animal como classe mãe para Cachorro e Peixe, mas com uma diferença: não definimos os métodos andar e nadar diretamente na classe mãe.

Agora, a classe Animal contém apenas atributos que podem ser utilizados por todas as classes filhas, como o nome do animal. Já os comportamentos (andar e nadar) são definidos em classes separadas e incorporados às classes específicas por meio do construtor.

Dessa forma, conseguimos aproveitar informações comuns sem forçar todas as classes a herdarem comportamentos indesejados. Contudo, isso gera outro problema: ao delegarmos a responsabilidade de instanciar esses comportamentos dentro das classes, podemos acabar criando dependências que tornam o código mais difícil de gerenciar.

Injeção de Dependência
A injeção de dependência funciona de maneira semelhante à composição, mas com uma diferença essencial: em vez de instanciarmos os comportamentos dentro do construtor, passamos esses comportamentos como parâmetros.

Isso significa que a instância ocorre antes da criação do objeto e ele apenas recebe as informações já prontas. Essa abordagem é ideal, pois retira a responsabilidade de criação dos comportamentos das classes e terceiriza essa lógica, tornando o código mais organizado, modular e fácil de testar.
 
