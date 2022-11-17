const express = require('express');
const morgan = require('morgan');

//inicializaciones
const app = express();


//setting 
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//Variables globales 


//Rutas de nuestro servidor 

//archivos publicos(lo que accede al navegador)

//Starting del servidor 
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})