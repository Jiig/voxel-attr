inherits = require('inherits')
var em = require('events').EventEmitter

module.exports = function(game, opts) {
    return new Attr(game, opts)
}

function Attr(game, opts) {
    this.attr_d = opts.attr_d || default_d
    this.roll = opts.roll || function(attr) {
        this.attr_d[attr][0] = 1
    }
    this.mod = opts.mod || function(attr) {
        this.attr_d[attr][3] = Math.round(Math.max(this.attr_d[attr][0] / 10, 1))
    }

    this.game = game
    this.enable()
}

inherits(Attr, em)

default_d={
    "str":[1, 0, 99, 0],
    "dex":[1, 0, 99, 0],
    "con":[1, 0, 99, 0],
    "int":[1, 0, 99, 0],
    "wis":[1, 0, 99, 0],
    "cha":[1, 0, 99, 0]
}

Attr.prototype.enable = function() {}

Attr.prototype.get = function(attr) {
    return this.attr_d[attr]
}

Attr.prototype.getMin = function(attr) {
    return this.attr_d[attr][1]
}

Attr.prototype.getMax = function(attr) {
    return this.attr_d[attr][2]
}

Attr.prototype.getCurrent = function(attr) {
    return this.attr_d[attr][0]
}

Attr.prototype.getMod = function(attr) {
    return this.attr_d[attr][3]
}

Attr.prototype.set = function(attr, values) {
    this.attr_d[attr] = values
}

Attr.prototype.setCurrent = function(attr, value) {
    var old = this.attr_d[attr][0]
    this.attr_d[attr][0] = value
    this.emit('attrchange', attr, old, value, value - old)
}

Attr.prototype.setMin = function(attr, value) {
    var old = attr_d[attr][1]
    this.attr_d[attr][1] = value
    this.emit('attrchange', attr, old, value, value - old)
}

Attr.prototype.setMax = function(attr, value) {
    var old = attr_d[attr][2]
    this.attr_d[attr][2] = value
    this.emit('attrchange', attr, old, value, value - old)
}

Attr.prototype.setMod = function(attr, value) {
    var old = attr_d[attr][3]
    this.attr_d[attr][3] = value
    this.emit('attrchange', attr, old, value, value - old)
}

Attr.prototype.inc = function(attr, value) {
    this.attr_d[attr][0]+=value
    this.emit('attrinc', attr, this.attr_d[attr][0], value)
}

Attr.prototype.dec = function(attr, value) {
    this.attr_d[attr][0]-=value
    this.emit('attrdec', attr, this.attr_d[attr][0], value)
}

