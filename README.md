# mkup

Insert metadata characters into a string without affecting the indexing of the string. Useful for inserting color codes into a string of javascript.

```javascript
var mkup = require('mkup')

var decorate = mkup('some string')

decorate
  .insert(2, 'xx')
  .insert(3, 'xx')

console.log(decorate.toString()) // == 'soxxmxxe string'
```

## api

### mkup(String) -> Decorator instance

Create a new `Decorator` instance.

### Decorator#insert(index, str) -> itself

Insert markup `str` at `index` in original content. 
Returns itself. Mutates the decorator instance.

### Decorator#toString() -> String

Render the string.

## license

MIT
