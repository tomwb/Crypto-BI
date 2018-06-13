const express = require('express');
const router = express.Router();

const config = require('../config/binance.json');
const Binance = require('binance-api-node').default;
const client = Binance();
const client2 = Binance({
	apiKey: config.binance.apiKey,
	apiSecret: config.binance.apiSecret,
});

client.time().then(time => console.log(time));

router.get('/', async (req, res) => {
	var book = await client.allBookTickers();
	res.render('../views/index.ejs', {book:book});
});

module.exports = app => app.use('/', router);