 # Ambiente 
 1. Node JS é quem vai interpretar os nossos arquivos Javascript quem vai  fazer toda a execução e também junto dele vem o NPM, que vai fazer o gerenciamento dos nossos pacotes.
 2. Vamos precisar de um editor de texto, VSCode.
 3. Por fim iremos utlizar o Cypress para o nosso projeto.

Para mais detalhes sobre, Node JS e VSCode, existe um curso gratuito na Udemy. Chamado produtividade com VSCode.

Primeiros passos, dentro da pasta do nosso projeto, vamos criar nosso arquivo package.json que será onde o arquivo tem as informações do da configuração do projeto.

Vamos executar o seguinte comando:

```
npm init --yes
```

Caso execute somente o comando npm init, será feita uma série de perguntas sobre o projeto. No nosso caso vamos deixar nas configurações default.

Vamos agora instalar o Cypress como dependência para esse projeto:

```
npm install cypress
```
Instala a versção mais recente.

Instalando versão especifíca:

```
npm install cypress@3.6.0
```
Versão utilizada nesse curso.

Abrindo Cypress pela 1º vez.
```
npx cypress open
```
Vamos criar um script para abrir o cypress, vá até o arquivo package.json e insira o script:
```
"open": "cypress open"
```
Leia mais sobre Mock: [Conceito de Mock](https://github.com/Fabricioperrone/curso-cypress/commit/3a1f28ba37f43b46c44f1adfa7c8e11a89a1a9f6)
