# root-module
Find root module with folder and package.json.

## Installation

Install via npm

```sh
$ npm install root-module --save
```

## Usage

```
var rootModule = require('root-module'); 
var m = rootModule();

console.log(m.module);
console.log(m.folder);
console.log(m.packageFile);
```

## License

  [MIT](LICENSE)