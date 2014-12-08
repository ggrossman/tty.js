#!/usr/bin/env node

/**
 * tty.js
 * Copyright (c) 2012-2014, Christopher Jeffrey (MIT License)
 */

process.title = 'tty.js';

// Hack to keep telnet from getting to a subshell
process.env.SHELL = '/sbin/nologin';

var tty = require('../');

var conf = tty.config.readConfig()
  , app = tty.createServer(conf);

app.listen();
