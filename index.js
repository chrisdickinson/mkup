module.exports = function(str) {
  return new Decorator(str)
}

var SRC = 0
  , DEC = 1

function Decorator(str) {
  this._chunks = [{
          kind: SRC
        , src: str
  }]
}

var cons = Decorator
  , proto = cons.prototype

proto.insert = function(idx, what) {
  var curidx = 0
    , last_src
    , lhs
    , rhs

  for(var i = 0, len = this._chunks.length; i < len; ++i) {
    if(this._chunks[i].kind === SRC) {
      last_src = this._chunks[i]

      if(this._chunks[i].src.length + curidx > idx) {

        break
      }

      curidx += this._chunks[i].src.length
    }
  }

  idx -= curidx

  if(i === len) {
    if(idx >= 0) {
      return this._chunks.push({
          kind: DEC
        , src: what
      })
    }

    --i
  }

  lhs = this._chunks[i].src.slice(0, idx)
  rhs = this._chunks[i].src.slice(idx)

  this._chunks.splice(i, 1, {
      kind: SRC
    , src: lhs
  }, {
      kind: DEC
    , src: what
  }, {
      kind: SRC
    , src: rhs
  })

  return this
}

proto.toString = function() {
  return this._chunks.reduce(function(lhs, rhs) {
    return lhs + rhs.src
  }, '')
}
