const express = require('express');
const app = express();

app.set('view engine', 'ejs');

require('./src/controllers/cryptoController')(app);

// incializa o servidor
app.listen(3000);