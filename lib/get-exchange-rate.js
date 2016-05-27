'use strict';

const fx = require('money');

module.exports = function (data, fromCode, toCode) {
  fx.base = data.base;
  fx.rates = data.rates;

  return fx(1).from(fromCode).to(toCode);
};
