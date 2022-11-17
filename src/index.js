const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


//inicializaciones
const app = express();


//setting 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs => ({
    defaultLayout: 'main' ,
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Variables globales 
app.use((req , res, next) =>{
    
    next();
})

//Rutas de nuestro servidor 
app.use(require('./routes/'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

//archivos publicos(lo que accede al navegador)
app.use(express.static(path.join(__dirname, 'public')));

//Starting del servidor 
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})