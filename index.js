'use strict';

const isCodeValid = require('validate-currency-code');
const got = require('got');

const pkg = require('./package.json');
const filterResponse = require('./lib/filter-response');
const getExchangeRate = require('./lib/get-exchange-rate');

const EXCHANGE_RATES_API_URL = 'https://api.fixer.io/latest';

module.exports = function (from, to) {
  if (typeof from !== 'string' || from.length === 0) {
    throw new TypeError('"from" parameter must be a valid string');
  }

  if (typeof to !== 'string' || to.length === 0) {
    throw new TypeError('"to" parameter must be a valid string');
  }

  var fromCode = from.toUpperCase();
  var toCode = to.toUpperCase();

  if (!isCodeValid(fromCode) || !isCodeValid(toCode)) {
    throw new TypeError('"from" and "to" parameters must be valid currency codes (ISO 4217)');
  }

  return got.get(EXCHANGE_RATES_API_URL, {
    headers: {'user-agent': pkg.repository.url},
    query: {base: fromCode, symbols: toCode}
  })
    .then(filterResponse)
    .then(getExchangeRate)
    .catch(console.error);
};
