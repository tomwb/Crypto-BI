const express = require('express');
const app = express();

app.set('view engine', 'ejs');

require('./controllers/crypto')(app);

// incializa o servidor
app.listen(3000);