// server.js
import express from 'express';
import morgan from 'morgan';
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';
import blogRouter from './routes/blog.js';
import usuariosRouter from './routes/usuarios.js';
import superheroesRouter from './routes/superheroesRoutes.mjs';
import loggerMiddleware from './middleware/loggerMiddleware.js';
import expressLayouts from 'express-ejs-layouts';
const app = express();


// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para manejar JSON y datos de formularios
app.use(express.json());
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.set('layout', 'layout');

// Middleware para method-override
app.use(methodOverride('_method'));

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para registrar solicitudes HTTP
app.use(morgan('dev'));

// Middleware de sesión y flash
app.use(session({
  secret: 'tu-secreto',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());

// Middleware para pasar mensajes flash a las vistas
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success');
  res.locals.error_messages = req.flash('error');
  next();
});

// Middleware personalizado
app.use(loggerMiddleware);

// Asignar routers
app.use('/blogs', blogRouter);
app.use('/usuarios', usuariosRouter);
app.use('/heroes', superheroesRouter);
app.use(express.static('public'));

// Ruta de ejemplo para EJS
app.get('/', (req, res) => {
  res.render('greeting', { name: 'Carlos', title: 'Saludo' });
});

// Ruta de productos para EJS
app.get('/products', (req, res) => {
  const products = [
    { name: 'Laptop', price: 1500 },
    { name: 'Smartphone', price: 709 },
    { name: 'Tablet', price: 389 }
  ];
  res.render('products', { products, title: 'Productos' });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'Contacto' });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
