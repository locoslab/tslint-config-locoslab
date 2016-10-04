# tslint-config-locoslab
TSLint (http://palantir.github.io/tslint/) configuration for [Locoslab](https://github.com/locoslab/) projects

## Usage
1. Install: `npm install --save-dev locoslab/tslint-config-locoslab`
2. Create a file named `tslint.json` in your project:

```js
{
  "extends": "tslint-config-locoslab"
  // Overrides...
}
```

Note: TSLint and TypeScript are peer dependencies and must be installed separately, which allows using the preferred versions for each project.

## License

[MIT](http://opensource.org/licenses/MIT)
