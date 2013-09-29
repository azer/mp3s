## mp3s

Extracting MP3 Urls From Given URL

```js
mp3s = require('mp3s')

mp3s('http://foobar.com/list-of-mp3s.html', function (error, result) {

  list
  // => ['http://foobar.com/a.mp3',
         'http://foobar.com/b.mp3',
         'http://foobar.com/c.mp3']

});
```

## Install

```bash
$ npm install mp3s
```
