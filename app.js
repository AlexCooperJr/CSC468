const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const sharksRouter = require('./routes/sharks');
const db = require('./db'); 

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', indexRouter);
app.use('/sharks', sharksRouter);

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
