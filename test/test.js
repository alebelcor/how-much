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
  var promise = howMuch('USD', 'MXN');

  t.deepEqual(typeof promise.then, 'function');

  promise.then(rate => {
    t.is(typeof rate, 'number');
    t.true(rate > 0.0);

    t.end();
  });
});
