# localcast cli

CLI for [localcast](https://github.com/mafintosh/localcast), an event emitter that works across processes.

## install

    $ npm install -g localcast-cli

## example

In one terminal:

    $ cast 

In another terminal:

    $ echo "hello" | cast -

And terminal 1 will log "hello".

