# O que seria um Mock?

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/efdaa5db-9d64-4690-a0e6-5664f1b508cd)

## O que seria um Mock?
Vamos supor que temos um método A, e na execução dele ele faz algumas chamadas, a algumas outras estruturas externas a esse método, vamos chamar de método B.







E até mesmo alguma Api externa. Ou seja, toda a vez que invocarmos esse método (A) ele irá chamar o outro método (B), e ele vai fazer uma chamada a uma API externa.

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/84f8e5f0-73cd-4be8-aaac-6adb00b03682)

Toda a vez que for precisar fazer esse teste, será preciso montar um cenário que atenda as requisições do método (B), porque pode ser que ele tenha outras dependências também. 
Também precisamos ter acesso a API, essa API por exemplo, seria o site dos correios, que por ele conseguimos pegar um endereço pelo seu Cep. 
Ou seja, não queremos ficar consumindo essa API todas as vezes que realizar um teste, ás vezes queremos só isolar o comportamento de método, e assim conseguimos garantir que, nosso método está funcionando de acordo.
Dado que, o comportamento que estamos pensando que essas outras dependências irão nos dar funcionem.

### Então para não ficar chamando-os diretamente:

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/eb8c90ad-71d3-4663-8416-8703ec4ce14c)

### Podemos injetar no método A, estruturas que vamos chamar de Mock.

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/4c96f86a-67a6-4521-bd77-9b08014a00ff)

### Então o que seria essa estrutura de Mock?

Como o próprio nome diz, o Mock é um objeto falso, ele é um objeto genérico, que iremos colocar como se fosse o método (B), ou como se fosse a chamada de uma API. 
E por padrão ele vai retornar o valor default daquele método, daquela API, ou seja, um NULL, INT, ou uma STRING vazia, coisas desse tipo.
Mas também nos dá poder para de dizer exatamente o que ele deve nos retornar, por exemplo, podemos pedir para a API do correio retornar sempre um determinado endereço, ou seja, o que fizermos de busca de cep, ele nos dará um endereço, e assim nosso método continua funcionando, sendo que, não precisamos ter um acesso direto a essa API.
Assim como o método (B), também deve retornar sem nos preocupar com todas as dependências do método (B), por exemplo, o método (B) pode chamar um determinado banco de dados, um outro serviço externo, se vamos dizer assim! Matar, essa comunicação logo na chamada através de um Mock, não será preciso nos preocupar com tudo isso que vem a partir daí.

### Então porque utilizar um Mock?

Por diversos motivos, como foi dito no contexto de testes unitários, o teste unitário deve focar na logica que está dentro, por exemplo do método (A). 

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/d34a45b8-e3e9-4515-9ba5-4eb9cc26640a)

Mocamos para não nos preocupar com elas. Assim nosso teste será mais rápido, e mais confiável.
Caso haja erros, ele vai ser exclusivo do método (A). Ou seja, não será erro de um algum retorno do método (B, ou API). Por exemplo, lentidão de alguns deles, retorno errado do método (B), indisponibilidade da API. 
Ou seja, nosso método ficará bem mais conciso. O que mais conseguimos através de mocks?

- Simular algum evento que seja complicado de acontecer, por exemplo, não seria possível pedir para a API ficar fora do ar, ou lançar uma sessão inesperada, através de um Mock conseguimos simular esses eventos, e essas são algumas vantagens do uso do Mock.

### O método A, vai chamar o B, método A vai chamar a API.

![image](https://github.com/Fabricioperrone/curso-cypress/assets/69866913/a09db9a6-8806-432a-861d-03cf97a48ede)

Só que em um determinado momento, vamos conseguir injetar essa estrutura. Apesar do método A, pensar que está invocando essas estruturas reais, na verdade, injetamos uma estrutura falsa e com isso vamos ter o poder de dizer exatamente o que elas devem nos retornar.
Também conseguimos, monitorar essas chamadas, fazemos perguntas ao Mock do tipo:

- Mock, quando o método A, executou ele realmente chamou o método B?
- Ele chamou com esses parâmetros?

Ou seja, conseguimos ter um controle sobre essas iterações. Entre o método e suas dependências. 




