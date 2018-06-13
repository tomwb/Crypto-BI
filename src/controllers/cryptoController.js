
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

router.get('/acount-info', async (req, res) => {
	// var info = await client.accountInfo();
	res.render('../src/views/acount_info.ejs');
});

router.get('/trade-history', async (req, res) => {
	var trades = await client.tradesHistory({ symbol: 'ETHBTC', limit: 10 });
	res.render('../src/views/trade_history.ejs', {trades:trades});
});

module.exports = app => app.use('/', router);