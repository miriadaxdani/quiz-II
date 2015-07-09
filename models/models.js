var path = require('path');

//cargar Modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
						{dialect: "sqlite", storage: "squiz-sqlite"}
					);
					
//Importar la definicion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
exports.Quiz = Quiz; // exportar definicion de tabla Quiz

// sequelize.sync() Crea e inicializa la tabla de preguntas en BD
sequelize.sync().success(function() {
	// Success(..) Ejecuta el manejador una vez creada la tabla
	Quiz.count().success(function(count){
		if(count === 0) { //la tabla se inicializa solo si esta vacia
			Quiz.create({
				pretunta: 'Capital de Italia',
				respuesta: 'Roma'
			})
			.success(function(){console.log('Base de datos inicializada');});
		}
	});
});