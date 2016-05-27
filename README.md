# how-much

> Get the currency conversion of an exchange rate

[![npm version](https://img.shields.io/npm/v/how-much.svg)](https://npmjs.org/package/how-much)
[![Build Status](https://img.shields.io/travis/alebelcor/how-much/master.svg)](https://travis-ci.org/alebelcor/how-much)
[![Test coverage](https://img.shields.io/coveralls/alebelcor/how-much.svg)](https://coveralls.io/github/alebelcor/how-much)

## Install

```bash
npm install --save how-much
```

## Usage

```js
const howMuch = require('how-much');

howMuch('USD', 'MXN').then(rate => {
  console.log(rate);
  //=> 18.368
});
```

## API

### howMuch(from, to)

Returns a **promise** that resolves to a number value of the exchange rate.

#### from

Type: `string`

The ISO 4217 code used as a currency base.

#### to

Type: `string`

The ISO 4217 code of the target of the currency conversion.

## License

MIT © Alejandro Beltrán
