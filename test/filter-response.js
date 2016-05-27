'use strict';

import test from 'ava';
import filterResponse from '../lib/filter-response';

const response = {body: '{"foo": "bar"}'};

test('it should return the `body` member', t => {
  t.deepEqual({ foo: 'bar' }, filterResponse(response));
});
