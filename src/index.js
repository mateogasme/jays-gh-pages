const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs.engine({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

// Middlewares
app.set(morgan('dev'));
app.set(
	express.urlencoded({
		extended: false,
	})
);
app.set(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/index.routes'));

// Starting the server
app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`);
});