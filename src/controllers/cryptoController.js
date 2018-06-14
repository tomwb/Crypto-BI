
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
	var user_info = await client.accountInfo({useServerTime: true});
	res.render('../src/views/acount_info.ejs',{user_info: user_info});
});

router.get('/trade-history', async (req, res) => {
	var trades = await client.tradesHistory({ symbol: 'ETHBTC', limit: 10 });
	res.render('../src/views/trade_history.ejs', {trades:trades});
});

router.get('/my-trades', async (req, res) => {
	var trades = await client.myTrades({symbol:'ETHBTC'});
	res.render('../src/views/my_trades.ejs', {trades:trades});
});

module.exports = app => app.use('/', router);