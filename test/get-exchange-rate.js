'use strict';

import test from 'ava';
import getExchangeRate from '../lib/get-exchange-rate';

test('it should return the exchange rate', t => {
  t.deepEqual(15.55, getExchangeRate({base: 'USD', rates: {MXN: 15.55}}, 'USD', 'MXN'));
});
