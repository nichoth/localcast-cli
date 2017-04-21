# localcast cli

CLI for [localcast](https://github.com/mafintosh/localcast), an event emitter that works across processes.

## install

    $ npm install -g localcast-cli

## example

In one terminal:

    $ cast 

In another terminal:

    $ echo "hello" | cast -

And terminal one will log "hello".


## use

```
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
```
