var test = require('tape')

var mkup = require('./index.js')

test('inserting markup past end', function(assert) {
  var text = 'hello world'
    , dec = mkup(text)

  dec.insert(text.length, 'xxx')

  assert.equal(dec.toString(), 'hello worldxxx')
  assert.end()
})

test('inserting markup at start', function(assert) {
  var text = 'hello world'
    , dec = mkup(text)

  dec.insert(0, 'xxx')

  assert.equal(dec.toString(), 'xxxhello world')
  assert.end()
})

test('inserting markup at same index repeatedly', function(assert) {
  var text = 'hello world'
    , dec = mkup(text)

  dec
    .insert(1, 'xxx')
    .insert(1, 'yyy')
    .insert(1, 'zzz')

  assert.equal(dec.toString(), 'hxxxyyyzzzello world')

  assert.end()
})

test('inserting markup repeatedly', function(assert) {
  var text = 'hello world'
    , dec = mkup(text)

  for(var i = 0, len = text.length; i < len; ++i) {
    if(i % 2 !== 0) {
      dec.insert(i, '!')
    }
  }

  assert.equal(dec.toString(), 'h!el!lo! w!or!ld')

  assert.end()
})
