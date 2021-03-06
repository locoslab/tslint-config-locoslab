# tslint-config-locoslab [![Build Status](https://travis-ci.org/locoslab/tslint-config-locoslab.svg?branch=master)](https://travis-ci.org/locoslab/tslint-config-locoslab) [![npm version](https://badge.fury.io/js/tslint-config-locoslab.svg)](https://badge.fury.io/js/tslint-config-locoslab)
TSLint (http://palantir.github.io/tslint/) configuration for [Locoslab](https://github.com/locoslab/) projects

## Usage
1. Install: `npm install --save-dev tslint-config-locoslab`
2. Create a file named `tslint.json` in your project and 'extend' the config:

```js
{
  "extends": "tslint-config-locoslab"
  // Overrides...
}
```

Notes:
- TSLint and TypeScript must be installed separately, which allows using the preferred versions for each project
- This is work-in-progress
- The rules are roughly sorted in 3 groups: whitespace/formatting, style, tslint:recommended overrides

## License
[MIT](http://opensource.org/licenses/MIT)
