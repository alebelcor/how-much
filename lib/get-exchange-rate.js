'use strict';

const fx = require('money');

module.exports = function (data) {
  const ratesKeys = Object.keys(data.rates);
  const firstRate = ratesKeys[0];

  fx.base = data.base;
  fx.rates = data.rates;

  return fx(1).from(data.base).to(firstRate);
};
