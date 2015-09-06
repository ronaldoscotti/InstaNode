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
ig.use({
	client_id: 'fdea49e267434822af690ed13f9f5189',
	client_secret: '44da8562eea74345835b75300ff046cb'
});

// Definindo as rotas
app.get('/', function (req, res) {
	// Usando a variavel instagram para buscar as fotos populares
	ig.media_popular(function (err, medias, remaining, limit) {
		// Renderizando e view com os dados retornados pela API
		res.render('pages/index', { grams: medias });
	});
});

// Iniciando o servidor
app.listen(3000);
console.log('InstaNode rodando na porta 3000!');