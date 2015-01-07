#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2))
var launch = require('open')
var path = require('path')

var uri = argv._[0]
if (!uri || argv.h || argv.help) {
    return require('fs').createReadStream(path.join(__dirname, 'usage.txt'))
        .pipe(process.stdout)
}

launch(uri)