# rootmodule
Find root module with folder and package.json.

## Installation

Install via npm

```sh
$ npm install rootmodule --save
```

## Usage

```
var rootModule = require('rootmodule'); 
var m = rootModule();

console.log(m.module);
console.log(m.folder);
console.log(m.packageFile);
```

## License

  [MIT](LICENSE)