const config = require('../../config/binance.json');

const Binance = require('binance-api-node').default;

const client = Binance({
	apiKey: config.binance.apiKey,
	apiSecret: config.binance.apiSecret
});

client.time().then(time => console.log(time));

module.exports = client;