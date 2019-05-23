# just-the-words

Isolate the words from a given block of text.

## Examples

```js
justTheWords('Hello, world');
// -> ['Hello', 'world']

justTheWords('Two\nlines');
// -> ['Two', 'lines']

justTheWords('Now\rwe\'re\ngoing\tcrazy');
// -> ['Now', 'we\'re', 'going', 'crazy']

justTheWords('Spider-man? He\'s my favorite!');
// -> ['Spider-man', 'He\'s', 'my', 'favorite']
```

## Install

```sh
npm install just-the-words
yarn add just-the-words
```

## Use

```js
const justTheWords = require('just-the-words');
import justTheWords from 'just-the-words';

console.log(justTheWords('Hello world!'))
// -> ['Hello', 'world']
```

## API

```js
justTheWords(
    content:string,
    safeCharacters?:string,
    overrideDefaultSafeCharacters?:boolean
)
```

Default safe characters: `'’-`

## Author

[Sean McPherson](https://github.com/seanmcp)
