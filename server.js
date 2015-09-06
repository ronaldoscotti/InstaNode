// Definindo as variaveis que precisamos
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

// Configurações do site
// Definindo a pasta assets
app.use(express.static(__dirname + '/public'));

// Definindo a view engine para ejs
app.set('view engine', 'ejs');

// Configurando o App Instagram

// Definindo as rotas
app.get('/', function(req, res) {
	// Usando a variavel instagram para buscar as fotos populares
	// Renderizando e view com os dados retornados pela API
	res.render('pages/index');
});

// Iniciando o servidor
app.listem(3000);
console.log('InstaNode rodando na porta 3000!');