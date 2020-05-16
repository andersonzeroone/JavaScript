ES6+

Um pouco sobre as novas funcionalidades do javaScript como:


   [webpack](#sobre-webpack)
   [Class}(#sobre-class)
    Arrow functions
    Desestrutura��o
    Rest/spread
    Import/export
    Async/await

## Sobre webpack  

O webpack � usado para empacotar modulos est�ticos, gerando um mapeamento dos modulos e dependencias podendo gerar um ou mais pacotes. Em resumo, um projeto que existem diversos arquivos .js, .css � poss�vel unir esses modulos, ou em projetos maiores divide esses modulos e no final passam a ser um s�.

entendo o que acontece ...

![img](https://www.webdevdrops.com/wp-content/uploads/2019/10/webpack-1.png)


O webpack posso a seguinte estrutura b�sica.

#Entrey

Indica qual m�dulo o webpack deve usar para iniciar em seguida busca as depend�mcias  e faz a importa��o. Normalmente o ponto de entrada  � definido no ./src/main.js, mas � poss�vel definir um arquivo diferente e at� emsmo v�rios pontos de entradas fazendo sua configura��o no webpack.config.js.

```css
module.exports = {
	entry: './src/main.js',
	
```
# Output

Output define o nome e local  onde ser�  gerado  o pacote pelo webpack.  Para configurar, devemos definir um objeto output com as propriedades path  e filename no arquivo de configura��o do webpack:
```css
module.exports = {
	entry: './src/main.js',
	output:{
		path: __dirname + '/public',
		filename: 'bundle.js',
	},

```

Essa congigura��o ir� um arquivo bundle.js , A propriedade  path   indica onde o arquivo ser� criado , o __dirname  vari�vel do nodejs cont�m o nome do diret?io onse se encontra o m�dulo atual.
e filename  o nome do arquivo que ser� gerado.

# Loaders

O Loaders � usadado para que ele possa entender outros tipos de arquivos  Loaders que s�o m�dulos que podem ser instalados separadamente possibilitando que o webpack converta esses arquivos em m�dulos v�lidos e os adicione ao gr�fico de depend�ncia. Os Loaders tamb�m s�o utilizados para converter JavaScript de uma vers�o para outra. Para incluirmos os Loaders criamos uma nova se��o module no arquivo de configura��o, nessa se��o podemos definir uma ou mais rules

```css
module:{
   rules:[
	{    test:/\.js$/,
	   exclude: /node_modules/,
		use:{
		loader: 'babel-loader',
		       }	
		   }
	       ],
       },
}


```

# Estrutura webpack

```css
module.exports = {
	entry: './src/main.js',
	output:{
		path: __dirname + '/public',
		filename: 'bundle.js',
	},
	devServer:{
		contentBase: __dirname + '/public'
	},
	module:{
		rules:[
		{    test:/\.js$/,
			exclude: /node_modules/,
			use:{
				loader: 'babel-loader',
			   }	
		   }
	       ],
       },
}

```












## Sobre Class

As classes foram introduzidas no ECMAScript 2015, uma heran�a baseada em prot�tipos.As casses em JavaScript permite a cria��o simples e clara de objetos e lidar com heran�a.

Definindo classes
Uma maneira de definir uma classe � usando uma declara��o de classe. Para declarar uma classe, voc� deve usar a palavra-chave class seguida pelo nome da classe (aqui "avo").

```css
class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}
```
## Express�es de Classes

Express�es de Classes podem possuir nomes ou n�o (an�nimas). O nome dado para uma express�o de classe � local ao corpo da classe.

```css
// sem nome
let avo = class{
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}

//nomeada
let avo = class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}
```
Estrutura de uma classe

A classe possui em sua estrutura metodos e um construtor, o corpo da chave e envolvido por {}.

## Construtor 

O m�todo constructor � um tipo especial de m�todo para criar e iniciar um objeto criado pela classe. S� pode existir um m�todo especial com o nome "constructor" dentro da classe. Um erro de sint�xe SyntaxError ser� lan�ado se a classe possui mais do que uma ocorr�ncia do m�todo constructor.
Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.








## M�todos est�ticos

A palavra-chave static define um m�todo est�tico de uma classe. M�todos est�ticos s�o chamados sem a instancia��o da sua classe e n�o podem ser chamados quando a classe � instanciada. M�todos est�ticos s�o geralmente usados para criar fun��es de utilidades por uma aplica��o.


```css
class Ponto {
	constructor(x, y) {
	   this.x = x;
	   this.y = y;
     }

	static distancia(a, b) {
	    const dx = a.x - b.x;
	    const dy = a.y - b.y;

	   return Math.hypot(dx, dy);
     }
}


const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

p1.distancia;//undefined
p2.distancia;//undefined

console.log(Ponto.distancia(p1, p2));
```
## Empacotando com prot�tipos e m�todos est�ticos

Quando um m�todo est�tico ou prot�tipo � chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, undefined ou null), ent�o o valor "this" ser� undefined dentro da fun��o chamada. Autoboxing n�o vai acontecer. O comportamento ser� o mesmo mesmo se escrevemos o c�digo no modo n�o-estrito.
```
```css
class Animal { 
        falar() {
            return this;
          }
          static comer() {
            return this;
          }
}

let obj = new Animal();
obj.falar(); // Animal {}
let falar = obj.falar;
falar(); // undefined

Animal.comer(); // class Animal
let comer = Animal.comer;
comer(); // undefined
```

Se escrevemos o c�digo acima usando classes baseadas em fun��o tradicional, ent�o o autoboxing acontecer� com base no valor de "this" para o qual a fun��o foi chamada.


```css
function Animal() { }

    Animal.prototype.falar = function() {
         return this;
    }

    Animal.comer = function() {
        return this;
    }

let obj = new Animal();
let falar = obj.falar;
falar(); // objeto global

let comer = Animal.comer;
comer(); // objeto global

```
## Propriedades de inst�ncia

Propriedades de inst�ncias devem ser definidas dentro dos m�todos da classe:
```css
class Retangulo {
   constructor(altura, largura) {    
     this.altura = altura;
     this.largura = largura;
  }
}
```
Propriedades de dados est�ticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declara��o do corpo da classe.

Retangulo.larguraEstatico = 20;
Retangulo.prototype.larguraPrototipagem = 25;
Sub classes com o extends

A palavra-chave extends � usada em uma declara��o de classe, ou em uma express�o de classe para criar uma classe como filha de uma outra classe.

```css
class Animal { 
  constructor(nome) {
    this.nome = nome;
  }
  
  falar() {
    console.log(this.nome + ' emite um barulho.');
  }
}

class Cachorro extends Animal {
  falar() {
    console.log(this.nome + ' latidos.');
  }
}

let cachorro = new Cachorro('Mat');
cachorro.falar();

```
Se existir um contrutor nas subclasses, � necess�rio primeiro chamar super() antes de usar a keyword "this".

Tamb�m � possivel ampliar (extends) "classes" baseadas em fun��es tradicionais.

```css
function Animal (nome) {
  this.nome = nome;
}

Animal.prototype.falar = function() {
   console.log(this.nome + ' fa�a barulho.');
}

class Cachorro extends Animal { 
  falar() {
    console.log(this.nome + ' lati.');
  }
}

let cachorro = new Cachorro('Mitzie');
cachorro.falar(); // Mitzie lati.

Note que classes n�o extendem objetos normais (n�o constru�veis). Se voc� quer herdar de um objeto, � necess�rio utilizar Object.setPrototypeOf():

let Animal = {
   falar() {
      console.log(this.nome + ' fa�a barulho.');
   }
};

class Cachorro {
   constructor(nome) {
      this.nome = nome;
   }
}

Object.setPrototypeOf(Cachorro.prototype, Animal); 

let cachorro = new Cachorro('Mitzie');
cachorro.falar(); //Mitzie fa�a barulho.
```

## Species

Voc� pode querer retornar um objeto Array na sua classe MinhaArray derivada de array. O padr�o Species permite a sobrescrita do construtor padr�o.

Por exemplo, quando utilizando um m�todo como map() que retorna o construtor padr�o, voc� pode querer que esse m�todo retorne um objeto Array ao inv�s do objeto MinhaArray. O Symbol.species te permite fazer isso:

class MinhaArray extends Array {
   // Sobrescreve species para o construtor da classe pai Array
   static get [Symbol.species]() { return Array; }
}

let a = new MinhaArray(1,2,3);
let mapped = a.map(x => x * x);
 
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true

## Chamada da classe pai com super

A palavra-chave (keyword) super � utilizada para chamar fun��es que pertencem ao pai do objeto.

```css
class Gato {
   constructor(nome) {
      this.nome = nome;
   }

   falar() {
      console.log(this.nome + ' fa�a barulho.');
   }
}

class Leao extends Gato {
   falar() {
      super.falar();
      console.log(this.nome + ' roars.');
   }
}

let leao = new Leao('Fuzzy');
leao.falar();

// Fuzzy fa�a barulho.
// Fuzzy roars.
```

## Ex de class  do projeto
```css
class avo {
      constructor(sobrenome){
       this.sobrenome = sobrenome
       }
}

class pai extends avo{
       constructor(sobrenome, profissao = 'dev'){
       super(sobrenome)
       this.profissao = profissao
       }
}

class filho extends pai {
       constructor(){
       super('Silva')
       }
}

const Filho = new filho
console.log(Filho);

```

Fonte:
https://webpack.js.org/
https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
