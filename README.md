# generator-umd-gulp

version: 0.3.1

> Basic [UMD](https://github.com/umdjs/umd) generator with gulp setup.

> Based on [generator-umd](https://github.com/ruyadorno/generator-umd) by Ruy Adorno


## Getting Started

### About

This script is an [Yeoman Generator](http://yeoman.io/), meant to be used with some modern Javascript tools such as [npm](https://www.npmjs.org) and [Bower](http://bower.io/).

### Information on the generated module

- The generated module will use the [returnExportsGlobal](https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js) definition from [UMD](https://github.com/umdjs/umd).

- It will provide support to both AMD([RequireJS](http://requirejs.org/)), [Node.js](http://nodejs.org/), [Browserify](http://browserify.org/) and global namespace definition.

- File definition for both **npm** and **Bower** package managers will be also generated along with the initial structure.

- Setup for unit testing with karma / mocha will be generated with example unit test file.

- Setup for e2e tests using mochaPhantomjs will be generated


## Setup

You will need to have at least **npm** previously installed on your machine.

1) Install the [Yeoman CLI](https://github.com/yeoman/yo)

```shell
npm install -g yo
```

2) Install the UMD Generator

```shell
npm install -g generator-umd-gulp
```

## Generating your module

1) Open your terminal, navigate to an empty folder destined to your module:

```shell
mkdir new-module
cd new-module/
```

2) Run the generator:

```shell
yo umd-gulp
```

3) Input the required information, the generator will ask you:

- A module name
- A description to your module (optional)
- The repository URL for your module (optional)

4) You should be ready to go!

- Tests can be run using `npm test` command. Coverage for unit tests will be available in coverage/ directory.
- E2E tests can be run using `npm run e2e` command.
- For development purposes run `npm run watch` command.
- To minify your module run `npm run build` command.

### tagging
task             | version
-----------------|-------------------------------------
gulp tag         | v0.0.1 -> v0.0.2 + commit + tag + push
gulp tag --minor | v0.0.1 -> v0.1.0 + commit + tag + push
gulp tag --major | v0.0.1 -> v1.0.1 + commit + tag + push

### bumping
task             | version
--------------   |-----------------
gulp bump        | v0.0.1 -> v0.0.2
gulp bump --minor| v0.0.1 -> v0.1.0
gulp bump --major| v0.0.1 -> v1.0.1

## Todo

### Support a way of easily adding dependencies

If you need to consume other libraries from inside your module, you will have to take a look at the [UMD spec](https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js) and implement it by yourself.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

