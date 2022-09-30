#!/usr/bin/env node

const net = require('net');

const SOCK_PATH = '/run/user/1002/git/git.sock';
// const SOCK_PATH = '/root/joji/prototypes/git-remote-custom/git.sock';

var client = net.createConnection(SOCK_PATH);

client.pipe(process.stdout);
process.stdin.pipe(client);

client.on('end', () => {
    process.exit(0);
})
