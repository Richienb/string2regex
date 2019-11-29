# String To Regex [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/string2regex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/string2regex)

Convert a string encoded regex into a usable one.

[![NPM Badge](https://nodei.co/npm/string2regex.png)](https://npmjs.com/package/string2regex)

## Install

```sh
npm install string2regex
```

## Usage

```js
const string2Regex = require("string2regex");

string2Regex("/a/g")
//=> /a/g
```

## API

### string2Regex(string)

#### string

Type: `string`

The string to convert.
