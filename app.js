const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/statics', express.static('./src/statics'));

require('./src/controllers/cryptoController')(app);

// incializa o servidor
app.listen(3000);