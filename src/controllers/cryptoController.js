
const express = require('express');
const router = express.Router();

const client = require('../modules/binanceCrypto');

router.get('/', async (req, res) => {
	res.render('../src/views/index.ejs');
});

router.get('/all-books', async (req, res) => {
	var book = await client.allBookTickers();
	res.render('../src/views/all_books.ejs', {book:book});
});

module.exports = app => app.use('/', router);