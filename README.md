# react-app-rewire-modernizr

Adds [`modernizr-loader`](https://github.com/peerigon/modernizr-loader) to your [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

[![npm](https://img.shields.io/npm/v/react-app-rewire-modernizr.svg?style=flat-square)](http://npm.im/react-app-rewire-modernizr)
[![MIT License](https://img.shields.io/npm/l/react-app-rewire-modernizr.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://img.shields.io/travis/ctrlplusb/react-app-rewire-modernizr.svg?style=flat-square)](https://travis-ci.org/ctrlplusb/react-app-rewire-modernizr)

## TOCs

  - [Installation](#installation)
  - [Usage](#usage)

## Installation

```
npm i react-app-rewire-modernizr -D
```

_or_

```
yarn add react-app-rewire-modernizr -D
```

## Usage

Within your `react-app-rewire` config:

```javascript
const modernizrPlugin = require('react-app-rewire-modernizr')

// Adds support for modernizr
config = modernizrPlugin(
  config,
  env,
  path.resolve(__dirname, "path/to/.modernizrrc")
)
```
