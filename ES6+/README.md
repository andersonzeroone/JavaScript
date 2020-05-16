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

As classes foram introduzidas no ECMAScript 2015, uma heran�a baseada em prot�tipos. As casses em JavaScript permite a cria��o simples e clara de objetos e lidar com heran�a.


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
