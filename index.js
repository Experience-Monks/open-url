#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2))
var launch = require('opn')
var path = require('path')
var parse = require('url').parse

var uri = argv._[0]
if (!uri || argv.h || argv.help) {
    return require('fs').createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout)
}

var protocol = parse(uri).protocol
if (!protocol || protocol.indexOf('localhost')===0)
    uri = ['http://',uri].join('')

launch(uri)