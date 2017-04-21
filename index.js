#!/usr/bin/env node
var minimist = require('minimist')
var cast = require('localcast')()
var argv = minimist(process.argv.slice(2), {
    alias: {
        n: 'namespace',
        h: 'help'
    }
})

if (argv.help) {
    process.stdout.write(use())
    process.exit()
}

var readInput = argv._.indexOf('-') !== -1

if (readInput) {
    process.stdin.on('data', function (d) {
        cast.emit(argv.namespace || 'data', ''+d)
    })
    process.stdin.on('end', function () {
        cast.close()
    })
} else {
    cast.on(argv.namespace || 'data', function (data) {
        process.stdout.write(data)
    })
}

function use () {
    return `
    Listen to messages

    Usage
        $ cast

    Options
        -                broadcast data from stdin
        -n, --namespace  start localcast with a namespace

    Examples
        $ cast  # log localcast messages to stdout
        $ echo "data" | cast -  # broadcast 'data'
        $ cast -n foo  # listen for events in foo namespace
`
}

