'use strict';

import test from 'ava';
import howMuch from '../';

test('it should validate the parameters', t => {
  t.throws(() => howMuch());
  t.throws(() => howMuch(0, 'foo'));
  t.throws(() => howMuch('', 'foo'));
  t.throws(() => howMuch('foo', 0));
  t.throws(() => howMuch('foo', ''));
  t.throws(() => howMuch('foo', 'bar'));
});

test('it should return a promise', t => {
  t.deepEqual('function', typeof howMuch('USD', 'MXN').then);
  howMuch('USD', 'MXN').then(rate => {
    t.is(typeof rate, 'number');
    t.true(rate > 0.0);
    t.end();
  });
});
