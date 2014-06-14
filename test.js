var test = require('tape')
var attr = require('./')

function Game() {}

function defaults(t) {
    a = attr(new Game(), {})
    t.deepEqual(a.get('str'), [1, 0, 99, 0])
    t.deepEqual(a.get('dex'), [1, 0, 99, 0])
    a.set('str', [2, 1, 3, 4])
    t.deepEqual(a.get('str'), [2, 1, 3, 4])
    a.roll('str')
    t.deepEqual(a.get('str'), [1, 1, 3, 4])
    a.setCurrent('str', 20)
    t.deepEqual(a.get('str'), [20, 1, 3, 4])
    a.mod('str')
    t.equals(a.getMod('str'), 2)
    a.inc('dex', 10)
    t.deepEqual(a.get('dex'), [11, 0, 99, 0])
    a.dec('wis', 1)
    t.deepEqual(a.get('wis'), [0, 0, 99, 0])
    t.end()
}

test('defaults', defaults)
