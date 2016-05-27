# how-much

> Get the currency conversion of an exchange rate

[![npm version](https://img.shields.io/npm/v/how-much.svg)](https://npmjs.org/package/how-much)
[![Build Status](https://img.shields.io/travis/alebelcor/how-much/master.svg)](https://travis-ci.org/alebelcor/how-much)

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

## Related

* [how-much-cli](https://github.com/alebelcor/how-much-cli) - Get the currency conversion of an exchange rate through the command-line

## License

MIT © Alejandro Beltrán
