[![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/string2regex/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/string2regex)
[![CodeFactor Score](https://www.codefactor.io/repository/github/Richienb/string2regex/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/Richienb/string2regex)

# String2Regex

[![NPM](https://nodei.co/npm/string2regex.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/string2regex)

Convert a string encoded regex into a usable one.

## Importing

From your NodeJS application:

```js
const String2Regex = require("string2regex")
```

From your web application:

```html
<script src="https://unpkg.com/string2regex/string2regex.min.js"></script>
```

## Usage

```js
// Returns ["Hello"]
"Hello World!".match(String2Regex("/Hello/g"))
```
