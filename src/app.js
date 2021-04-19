const exphbs = require('express-handlebars')
const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(require('./routes/web'))

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 2000);
